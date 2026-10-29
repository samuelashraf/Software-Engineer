import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, FastForward, Rewind, 
  Volume2, VolumeX, Sparkles, Music2, Check, Copy
} from 'lucide-react';
import { AUDIO_FILE_PATH, AUDIO_DURATION_SECONDS, TRANSCRIPT_SEGMENTS, TranscriptSegment } from '../data/transcriptData';

interface AudioPlayerBarProps {
  currentTime: number;
  isPlaying: boolean;
  onPlayPause: () => void;
  onSeek: (seconds: number) => void;
  onRateChange: (rate: number) => void;
  playbackRate: number;
  activeSegment: TranscriptSegment | null;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentTime,
  isPlaying,
  onPlayPause,
  onSeek,
  onRateChange,
  playbackRate,
  activeSegment,
}) => {
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    // Since RTL, click position from right is (rect.right - e.clientX)
    const isRtl = document.dir === 'rtl';
    const clickX = isRtl ? rect.right - e.clientX : e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * AUDIO_DURATION_SECONDS;
    onSeek(newTime);
  };

  const progressPercent = Math.min(100, Math.max(0, (currentTime / AUDIO_DURATION_SECONDS) * 100));

  const handleCopyCurrentText = () => {
    if (!activeSegment) return;
    navigator.clipboard.writeText(`[${activeSegment.startTime}] ${activeSegment.text}`);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div className="sticky bottom-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl transition-all">
      {/* Progress bar container */}
      <div 
        ref={progressBarRef}
        onClick={handleProgressBarClick}
        className="w-full h-2.5 bg-slate-800 hover:h-3.5 transition-all cursor-pointer relative group"
        title="انقر للانتقال في التسجيل الصوتي"
      >
        {/* Progress fill */}
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 relative"
          style={{ width: `${progressPercent}%` }}
        >
          {/* Thumb handle */}
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform" />
        </div>

        {/* Timestamp markers on hover / tooltips */}
        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20 px-2">
          {TRANSCRIPT_SEGMENTS.map((s) => (
            <div 
              key={s.id} 
              className="w-0.5 h-full bg-white/40"
              style={{ left: `${(s.startSeconds / AUDIO_DURATION_SECONDS) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Active segment info */}
        <div className="flex items-center gap-3 w-full md:w-auto min-w-0">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 relative">
            <Music2 className="w-5 h-5" />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20 truncate">
                {activeSegment ? activeSegment.badge : 'المقطع الصوتي'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {formatTime(currentTime)} / {formatTime(AUDIO_DURATION_SECONDS)}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium truncate mt-0.5" title={activeSegment?.title}>
              {activeSegment ? activeSegment.title : 'نصائح وخارطة طريق مهندس البرمجيات في عصر الـ AI'}
            </p>
          </div>

          {activeSegment && (
            <button
              onClick={handleCopyCurrentText}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-amber-300 transition-colors shrink-0 text-xs flex items-center gap-1"
              title="نسخ نص المقطع الصوتي الحالي"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs hidden sm:inline">تم النسخ</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">نسخ المقطع</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Center: Playback Controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Skip backward 10s */}
          <button
            onClick={() => onSeek(Math.max(0, currentTime - 10))}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-0.5 text-xs font-medium"
            title="رجوع 10 ثوانٍ"
          >
            <Rewind className="w-4 h-4" />
            <span className="text-[11px]">-10s</span>
          </button>

          {/* Main Play/Pause Button */}
          <button
            onClick={onPlayPause}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold flex items-center justify-center shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95"
            title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل الصوت'}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
          </button>

          {/* Skip forward 10s */}
          <button
            onClick={() => onSeek(Math.min(AUDIO_DURATION_SECONDS, currentTime + 10))}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-0.5 text-xs font-medium"
            title="تقديم 10 ثوانٍ"
          >
            <FastForward className="w-4 h-4" />
            <span className="text-[11px]">+10s</span>
          </button>

          {/* Restart */}
          <button
            onClick={() => onSeek(0)}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
            title="إعادة من البداية"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Speed & Audio Settings */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Speed Selector */}
          <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            {[1, 1.25, 1.5, 2].map((rate) => (
              <button
                key={rate}
                onClick={() => onRateChange(rate)}
                className={`px-2 py-0.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  playbackRate === rate
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          {/* Timestamp Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-800/50 px-2.5 py-1.5 rounded-lg border border-slate-700/40">
            <span className="text-amber-400 font-semibold">{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(AUDIO_DURATION_SECONDS)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
