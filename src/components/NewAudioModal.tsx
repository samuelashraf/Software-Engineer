import React, { useState, useRef, useEffect } from 'react';
import { X, Mic, MicOff, Upload, FileAudio, Play, Pause, Sparkles, Copy, Check, AlertCircle } from 'lucide-react';

interface NewAudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewAudioModal: React.FC<NewAudioModalProps> = ({ isOpen, onClose }) => {
  const [activeMode, setActiveMode] = useState<'record' | 'upload'>('record');
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [transcribedText, setTranscribedText] = useState('');
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<any>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  if (!isOpen) return null;

  const startRecording = async () => {
    setErrorMsg(null);
    setTranscribedText('');
    setRecordedAudioUrl(null);
    setRecordingSeconds(0);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start(250);
      setIsRecording(true);

      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);

      // Web Speech API for Arabic Speech Recognition
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'ar-EG'; // Egyptian / Modern Standard Arabic
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = 0; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript + ' ';
          }
          setTranscribedText(currentTranscript.trim());
        };

        recognition.onerror = (e: any) => {
          console.warn('Speech recognition warning:', e);
        };

        recognition.start();
        recognitionRef.current = recognition;
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg('تعذر الوصول إلى الميكروفون. يرجى التأكد من منح الإذن للمتصفح.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRecording(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMsg(null);
    const url = URL.createObjectURL(file);
    setRecordedAudioUrl(url);
    setTranscribedText(`تم تحميل الملف: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)\n\nيمكنك تشغيل الملف الصوتي بالأسفل، أو استخدام الميكروفون للتفريغ الصوتي التلقائي المباشر.`);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const copyTranscription = () => {
    if (!transcribedText) return;
    navigator.clipboard.writeText(transcribedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400">
              <FileAudio className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">تفريغ مقطع صوتي جديد</h3>
              <p className="text-xs text-slate-400">سجل مباشرة بالمايكروفون أو ارفع ملفاً صوتياً</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Mode Switcher */}
          <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => setActiveMode('record')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeMode === 'record'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>تسجيل مباشر بالمايك</span>
            </button>
            <button
              onClick={() => setActiveMode('upload')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                activeMode === 'upload'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>رفع ملف صوتي</span>
            </button>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {activeMode === 'record' ? (
            <div className="text-center py-6 space-y-4">
              <div className="relative inline-block">
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                    isRecording
                      ? 'bg-rose-500 text-white animate-pulse shadow-lg shadow-rose-500/30 scale-105'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                  }`}
                >
                  {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                </button>
              </div>

              <div>
                <p className="text-sm font-bold text-white mb-1">
                  {isRecording ? 'جارٍ التسجيل والتفريغ الحي...' : 'انقر على الزر لبدء التسجيل'}
                </p>
                <p className="text-xs font-mono text-amber-400 font-bold">
                  {isRecording && formatTimer(recordingSeconds)}
                </p>
              </div>
            </div>
          ) : (
            <div className="border-2 border-dashed border-slate-800 hover:border-slate-700 rounded-2xl p-6 text-center space-y-3">
              <Upload className="w-8 h-8 text-slate-500 mx-auto" />
              <div>
                <p className="text-sm font-semibold text-slate-200">اختر ملف صوتي أو فيديو</p>
                <p className="text-xs text-slate-500">MP3, WAV, M4A, OGG, MP4</p>
              </div>
              <label className="inline-block px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold cursor-pointer transition-all">
                استعراض الملفات
                <input
                  type="file"
                  accept="audio/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Audio preview player if recorded or uploaded */}
          {recordedAudioUrl && (
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400 block">معاينة الصوت:</span>
              <audio src={recordedAudioUrl} controls className="w-full h-10" />
            </div>
          )}

          {/* Transcription output box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>النص المفرّغ:</span>
              </span>
              {transcribedText && (
                <button
                  onClick={copyTranscription}
                  className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'تم النسخ' : 'نسخ'}</span>
                </button>
              )}
            </div>
            <textarea
              value={transcribedText}
              onChange={(e) => setTranscribedText(e.target.value)}
              placeholder="سيظهر النص المفرّغ هنا تلقائياً أثناء التحدث أو يمكنك كتابة وتعديل ملاحظاتك..."
              rows={5}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/50 resize-none font-['Cairo']"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
