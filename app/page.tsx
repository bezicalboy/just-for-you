'use client'

import { useRef, useState } from 'react'
import { Heart, Play, Pause } from 'lucide-react'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4 py-6 sm:py-10">

      {/* Letter content */}
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="relative z-10 p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6">

          {/* Top decorative */}
          <div className="flex justify-center">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* Heart */}
          <div className="flex justify-center">
            <Heart size={24} className="text-red-400 fill-red-400 animate-pulse" style={{ animationDuration: '3s' }} />
          </div>

          {/* Title */}
          <div className="space-y-2 text-center">
            <p className="text-xs sm:text-sm tracking-widest text-amber-900/50 uppercase font-light">
              For You
            </p>
            <h1 className="text-2xl sm:text-3xl italic text-amber-950 font-light"
              style={{ fontFamily: 'Georgia, serif' }}>
              A Letter without paper :VVVVV
            </h1>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1">
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
          </div>

          {/* Letter body */}
          <div className="space-y-4 text-justify">
            <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
              Hey, I wanted to write this instead of saying it, because I don’t always say things the right way out loud.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
              I know our communication’s been a bit off lately. I’m not trying to overreact or make it a big thing, but I don’t want it to stay like that either.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
              You still mean a lot to me. Even with the distance, I care about every call, every message, all of it.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
              You’ve had a good impact on me, and I appreciate you more than I probably say.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
              I’m still here, and I’d rather we figure things out than let them drift.
            </p>
          </div>

          {/* Bottom dots */}
          <div className="flex justify-center gap-1 pt-2">
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
            <div className="w-1 h-1 rounded-full bg-amber-400"></div>
          </div>

          {/* Signature */}
          <div className="text-center space-y-2 pt-3">
            <p className="text-sm text-amber-900/60" style={{ fontFamily: 'Georgia, serif' }}>
              Always yours, rawrr
            </p>
            <p className="text-2xl text-amber-600 italic"
              style={{ fontFamily: 'Brush Script MT, cursive', letterSpacing: '0.1em' }}>
              Hella
            </p>
            <p className="text-xs text-amber-700 pt-1">♡</p>
          </div>

          {/* Coffee stain */}
          <div className="absolute bottom-5 right-5 w-6 h-6 rounded-full opacity-15 bg-amber-900"
            style={{ boxShadow: 'inset 0 2px 4px rgba(139, 69, 19, 0.3)' }}
          />
        </div>

        {/* Music Section (UNDER TEXT) */}
        <div className="mt-10 text-center space-y-3">

          <p className="text-xs sm:text-sm text-amber-900/40 italic">
            ♪ remember this song? ♪
          </p>

          {/* Music Player */}
          <div className="mx-auto max-w-xs sm:max-w-sm">
            <div className="flex items-center gap-4 bg-amber-100/50 backdrop-blur-md border border-amber-200 rounded-full px-4 py-2 shadow-sm">

              {/* Button */}
              <button
                onClick={togglePlay}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-200 hover:bg-amber-300 transition"
              >
                {isPlaying ? (
                  <Pause size={16} className="text-amber-900" />
                ) : (
                  <Play size={16} className="text-amber-900 ml-0.5" />
                )}
              </button>

              {/* Text */}
              <div className="flex-1 overflow-hidden">
                <p className="text-xs text-amber-900/70 italic truncate">
                  now playing...
                </p>
              </div>

              {/* Pulse dot */}
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            </div>

            <audio ref={audioRef} src="/sample-music.mp3" />
          </div>

        </div>
      </div>
    </main>
  )
}
