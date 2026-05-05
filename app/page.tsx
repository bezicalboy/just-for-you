'use client'

import { Heart } from 'lucide-react'
import { MusicPlayer } from '@/components/music-player'

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4 py-6 sm:py-10">
      <MusicPlayer src="/sample-music.mp3" />

      {/* Letter content - seamless with background */}
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="relative z-10 p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
              
              {/* Top decorative element */}
              <div className="flex justify-center">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>

              {/* Heart icon */}
              <div className="flex justify-center">
                <Heart size={24} className="text-red-400 fill-red-400 animate-pulse" style={{ animationDuration: '3s' }} />
              </div>

              {/* Title */}
              <div className="space-y-2 text-center">
                <p className="text-xs sm:text-sm tracking-widest text-amber-900/50 uppercase font-light">For You</p>
                <h1 className="text-2xl sm:text-3xl italic text-amber-950 font-light" style={{ fontFamily: 'Georgia, serif' }}>
                  A Love Letter
                </h1>
              </div>

              {/* Divider dots */}
              <div className="flex justify-center gap-1">
                <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                <div className="w-1 h-1 rounded-full bg-amber-400"></div>
              </div>

              {/* Letter body */}
              <div className="space-y-4 sm:space-y-4 text-justify">
                <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
                  I had to write this down because sometimes words are too fragile to speak out loud. You mean everything to me.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
                  Every day with you feels like a gift I don&apos;t deserve but am so grateful for. Your smile, your laugh, the way your eyes light up when you&apos;re genuinely happy—it all makes my heart skip a beat.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
                  You&apos;ve changed me in the most beautiful way. You make me want to be better, to love harder, and to appreciate every single moment. Being with you feels like coming home.
                </p>

                <p className="text-base sm:text-lg leading-relaxed text-amber-950/85" style={{ fontFamily: 'Georgia, serif' }}>
                  I love you more than words could ever express. Thank you for being you, for trusting me with your heart, and for allowing me to be part of your beautiful life.
                </p>
              </div>

              {/* Divider dots */}
              <div className="flex justify-center gap-1 pt-2">
                <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                <div className="w-1 h-1 rounded-full bg-amber-400"></div>
                <div className="w-1 h-1 rounded-full bg-amber-400"></div>
              </div>

              {/* Signature */}
              <div className="text-center space-y-2 pt-3">
                <p className="text-sm text-amber-900/60" style={{ fontFamily: 'Georgia, serif' }}>
                  Always yours,
                </p>
                <p className="text-2xl text-amber-600 italic" style={{ fontFamily: 'Brush Script MT, cursive', letterSpacing: '0.1em' }}>
                  Me
                </p>
                <p className="text-xs text-amber-700 pt-1">♡</p>
              </div>

              {/* Coffee stain detail */}
              <div className="absolute bottom-5 right-5 w-6 h-6 rounded-full opacity-15 bg-amber-900" style={{
                boxShadow: 'inset 0 2px 4px rgba(139, 69, 19, 0.3)'
              }}></div>
        </div>
      </div>

      {/* Music note */}
      <div className="mt-8 text-center">
        <p className="text-xs sm:text-sm text-amber-900/40 italic">♪ Press play and let the music complete this moment ♪</p>
      </div>
    </main>
  )
}
