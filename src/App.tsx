/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  CheckSquare, Network, Compass, GraduationCap, 
  FileText, Clock, Play, Pause, Headphones, 
  Sparkles, ShieldAlert, ArrowDownToLine, Printer, 
  Check, Share2
} from 'lucide-react';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { TranscriptView } from './components/TranscriptView';
import { TodoListView } from './components/TodoListView';
import { MindMapView } from './components/MindMapView';
import { LearningPathView } from './components/LearningPathView';
import { FreeResourcesView } from './components/FreeResourcesView';
import { 
  AUDIO_FILE_PATH, 
  AUDIO_DURATION_SECONDS, 
  TRANSCRIPT_SEGMENTS, 
  TranscriptSegment 
} from './data/transcriptData';

export default function App() {
  // Default to 'todo' as requested by the user
  const [activeTab, setActiveTab] = useState<'todo' | 'mindmap' | 'path' | 'free_courses' | 'transcript'>('todo');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [audioError, setAudioError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Identify active segment based on current time
  const activeSegment: TranscriptSegment | null = 
    TRANSCRIPT_SEGMENTS.find(
      (seg) => currentTime >= seg.startSeconds && currentTime <= seg.endSeconds
    ) || TRANSCRIPT_SEGMENTS[0];

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Playback error:', err);
          setAudioError('تعذر تشغيل الصوت تلقائياً، يرجى التفاعل مع الصفحة أو تجربة زر التشغيل مرة أخرى.');
        });
    }
  };

  const handleSeek = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
      setCurrentTime(seconds);
      if (!isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(console.warn);
      }
    }
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif] selection:bg-amber-500/30 selection:text-amber-200">
      {/* Audio element for synchronous listening */}
      <audio
        ref={audioRef}
        src={AUDIO_FILE_PATH}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.warn('Audio tag load error:', e);
        }}
        preload="metadata"
      />

      {/* Main Top Header */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-400 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-amber-500/20">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-white tracking-wide">
                  خطة تطوير مهندس البرمجيات (To-Do List & Mind Maps)
                </h1>
                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  مصادر مجانية 100%
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>مبني بدقة على محتوى الملف والتسجيل الصوتي (10:44)</span>
              </p>
            </div>
          </div>

          {/* Quick Audio & Print Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all border border-slate-800"
              title="طباعة الخطة أو حفظ كـ PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">طباعة / PDF</span>
            </button>

            <button
              onClick={handlePlayPause}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
                isPlaying
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/20'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              <span>{isPlaying ? 'إيقاف الصوت' : 'استماع للتسجيل'}</span>
            </button>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar border-t border-slate-800/60 pt-1 pb-1">
          <button
            onClick={() => setActiveTab('todo')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'todo'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>قائمة المهام التفاعلية (To-Do List)</span>
          </button>

          <button
            onClick={() => setActiveTab('mindmap')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'mindmap'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>الخريطة الذهنية (Mind Map)</span>
          </button>

          <button
            onClick={() => setActiveTab('path')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'path'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>ترتيب خطة التعلم (تبدأ بإيه وبعده إيه)</span>
          </button>

          <button
            onClick={() => setActiveTab('free_courses')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'free_courses'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>المصادر المجانية المعتمدة (Deep Research)</span>
          </button>

          <button
            onClick={() => setActiveTab('transcript')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'transcript'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>التفريغ الحرفي الصوتي الكامل (13 مقطعاً)</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 pb-28">
        {audioError && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>{audioError}</span>
            </div>
            <button
              onClick={() => setAudioError(null)}
              className="text-xs underline hover:text-white"
            >
              إغلاق
            </button>
          </div>
        )}

        {/* Tab 1: Interactive To-Do List */}
        {activeTab === 'todo' && <TodoListView />}

        {/* Tab 2: Visual Mind Map */}
        {activeTab === 'mindmap' && <MindMapView />}

        {/* Tab 3: Ordered Learning Path */}
        {activeTab === 'path' && <LearningPathView />}

        {/* Tab 4: Free Courses Directory */}
        {activeTab === 'free_courses' && <FreeResourcesView />}

        {/* Tab 5: Full Verbatim Transcript View */}
        {activeTab === 'transcript' && (
          <TranscriptView
            currentTime={currentTime}
            onSeek={handleSeek}
            onPlay={handlePlayPause}
            isPlaying={isPlaying}
            activeSegmentId={activeSegment?.id || null}
          />
        )}
      </main>

      {/* Bottom Floating Synced Audio Player */}
      <AudioPlayerBar
        currentTime={currentTime}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onSeek={handleSeek}
        onRateChange={handleRateChange}
        playbackRate={playbackRate}
        activeSegment={activeSegment}
      />
    </div>
  );
}
