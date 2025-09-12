import React, { useState, useRef } from 'react';

import Lanyard from "./components/Lanyard/Lanyard";

import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";

import Squares from "./components/Squares/Squares";
// import SplashCursor from "./components/SplashCursor/SplashCursor";

import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
// import { Timeline } from "./components/Timelines/Timeline"

interface HomeComponentProps {
  userName: string;
}

interface WaveMenuProps {
  isPlaying: boolean;
  onClick: () => void;
}

const WaveMenu: React.FC<WaveMenuProps> = ({ isPlaying, onClick }) => {
  return (
    <div
      className="wave-menu fixed top-8 left-8 z-50 group relative"
      onClick={onClick}
      style={{
        border: '2px solid #545FE5',
        borderRadius: '50px',
        width: '200px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        background: '#1E1E2F', // dark mode
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <style jsx>{`
        .wave-menu li {
          list-style: none;
          height: 25px;
          width: 3px;
          border-radius: 10px;
          background: #545FE5;
          margin: 0 4px;
          animation-duration: 0.3s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-play-state: ${isPlaying ? 'running' : 'paused'};
        }

        /* hide waves on hover */
        .wave-menu:hover .waves {
          opacity: 0;
        }

        /* animation timings */
        .wave-menu li:nth-child(1) { animation-name: wave1; }
        .wave-menu li:nth-child(2) { animation-name: wave2; animation-delay: 0.2s; }
        .wave-menu li:nth-child(3) { animation-name: wave3; animation-delay: 0.23s; animation-duration: 0.4s; }
        .wave-menu li:nth-child(4) { animation-name: wave4; animation-delay: 0.1s; animation-duration: 0.3s; }
        .wave-menu li:nth-child(5) { animation-name: wave1; animation-delay: 0.5s; }
        .wave-menu li:nth-child(6) { animation-name: wave2; animation-duration: 0.5s; }
        .wave-menu li:nth-child(7) { animation-name: wave1; }
        .wave-menu li:nth-child(8) { animation-name: wave4; animation-delay: 0.4s; animation-duration: 0.25s; }
        .wave-menu li:nth-child(9) { animation-name: wave3; animation-delay: 0.15s; }

        @keyframes wave1 { from { transform: scaleY(1); } to { transform: scaleY(0.5); } }
        @keyframes wave2 { from { transform: scaleY(0.3); } to { transform: scaleY(0.6); } }
        @keyframes wave3 { from { transform: scaleY(0.6); } to { transform: scaleY(0.8); } }
        @keyframes wave4 { from { transform: scaleY(0.2); } to { transform: scaleY(0.5); } }
      `}</style>

      {/* Wave bars */}
      <div className="waves flex items-center transition-opacity duration-200">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>

      {/* Hover Play/Pause text */}
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium">
        {isPlaying ? 'Pause' : 'Play'}
      </span>
    </div>
  );
};


export default function HomeComponent({ userName }: HomeComponentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        loop
        preload="metadata"
      >
        <source src="music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Wave Menu Music Button */}
      <WaveMenu isPlaying={isPlaying} onClick={toggleMusic} />

      {/* <SplashCursor  /> */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#4a3429ff'
          hoverFillColor='#ff774548'
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="BATCH OF 2025-26 ✯ ACCEPTED ✯ "
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-60 right-28"
            />
          </div>
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-start">
                  <SplitText 
                    text={`Welcome, ${userName}`}
                    className="text-8xl font-semibold text-left mb-4 bg-gradient-to-r from-red-500 to-orange-500"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText 
                  text="We're really glad you're here! Get ready to explore, create and innovate along like-minded pros. 
                  Hack Club is where you'll get to try things out, make mistakes, learn fast, and meet people who love creating just as much as you do. 
                  We can't wait to see the amazing projects you'll build and the fun memories you'll make. 
                  Remember, you've got a whole team cheering you on!"
                  delay={75}
                  animateBy="words"
                  direction="bottom"
                  className="text-2xl mb-8 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-0 left-0 right-0 bottom-0 flex items-center justify-center py-10">
      <ScrollVelocity 
        texts={['[HackClub VITC] [HackClub VITC]  ', 'Build‎ ‎  Learn‎ ‎  Grow ‎ ‎ Build‎ ‎  Learn‎ ‎  Grow ‎ ‎ ', 'Make friends ‎ ‎  Have fun‎ ‎ Create Memories ‎ ‎ ']} 
      />
      </div>

    </div>
  );
}