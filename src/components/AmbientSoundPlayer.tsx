import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music, Play, Pause } from 'lucide-react';

export const AmbientSoundPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [mood, setMood] = useState<'lounge' | 'zen' | 'salon'>('lounge');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<any>(null);

  // Initialize Web Audio synth
  const startAtmosphere = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Chord frequencies for relaxing gallery vibes
      const chordSets = {
        lounge: [220, 277.18, 329.63, 415.30], // A Major 7th warm lounge
        zen: [196, 246.94, 293.66, 392.00],    // G major gentle peaceful
        salon: [261.63, 329.63, 392.00, 493.88] // C Major 7th bright salon
      };

      const freqs = chordSets[mood];
      oscillatorsRef.current.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      oscillatorsRef.current = [];

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle tremolo lfo for organic warmth
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.2 + (i * 0.05);
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 0.08;
        lfo.connect(lfoGain);
        lfoGain.connect(oscGain.gain);
        lfo.start();

        oscGain.gain.setValueAtTime(0.08 / (i + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        oscillatorsRef.current.push(osc);
      });

      setIsPlaying(true);
    } catch (e) {
      console.warn('Web Audio playback error', e);
    }
  };

  const stopAtmosphere = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    oscillatorsRef.current = [];
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopAtmosphere();
    } else {
      startAtmosphere();
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      stopAtmosphere();
      startAtmosphere();
    }
  }, [mood]);

  useEffect(() => {
    return () => {
      stopAtmosphere();
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch (e) {}
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 font-sans">
      <div className={`bg-[#111111]/95 backdrop-blur-md text-[#FAF9F6] border border-[#3A3530] shadow-2xl transition-all duration-300 ${
        isExpanded ? 'p-3.5 w-64' : 'p-2'
      }`}>
        <div className="flex items-center space-x-2">
          {/* Main Play/Pause Button */}
          <button
            onClick={togglePlayback}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isPlaying ? 'bg-[#D4AF37] text-black' : 'bg-[#2A2A2A] hover:bg-[#3D3D3D] text-[#CCCCCC]'
            }`}
            title={isPlaying ? 'Pause Ambient Gallery Audio' : 'Play Ambient Gallery Audio'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          {/* Mini waveform / Title button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-left cursor-pointer overflow-hidden"
          >
            <div className="flex items-end space-x-0.5 h-3.5 px-1">
              <span className={`w-0.5 bg-[#D4AF37] transition-all ${isPlaying ? 'animate-pulse h-3' : 'h-1'}`}></span>
              <span className={`w-0.5 bg-[#D4AF37] transition-all ${isPlaying ? 'animate-bounce h-3.5' : 'h-1.5'}`}></span>
              <span className={`w-0.5 bg-[#D4AF37] transition-all ${isPlaying ? 'animate-pulse h-2' : 'h-1'}`}></span>
            </div>
            <span className="text-[11px] font-medium text-[#E0E0E0] truncate">
              {isPlaying ? 'Salon Ambience' : 'Atelier Ambience'}
            </span>
          </button>
        </div>

        {/* Expanded Controls */}
        {isExpanded && (
          <div className="pt-3 mt-2 border-t border-[#292623] space-y-2.5 text-xs">
            {/* Mood selector */}
            <div className="flex items-center justify-between text-[10px] text-[#8C827A]">
              <span>Soundscape:</span>
              <div className="flex space-x-1">
                {(['lounge', 'zen', 'salon'] as const).map(m => (
                  <button
                    key={m}
                    onClick={() => setMood(m)}
                    className={`px-1.5 py-0.5 rounded capitalize ${
                      mood === m ? 'bg-[#D4AF37] text-black font-semibold' : 'bg-[#222222] text-[#8C827A] hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Volume slider */}
            <div className="flex items-center space-x-2">
              <Volume2 className="w-3 h-3 text-[#8C827A] shrink-0" />
              <input
                type="range"
                min="0"
                max="0.6"
                step="0.02"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-[#D4AF37] h-1 bg-[#333333] rounded cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
