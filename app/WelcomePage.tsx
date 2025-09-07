import React, { useState, useRef } from 'react';

interface Props {
  onSubmit: (name: string) => void;
}

const WelcomePage: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSubmit = () => {
    if (name.trim() && !isWaiting) {
      setIsWaiting(true);
      setIsButtonPressed(true);

      // Start playing music (safe call)
      audioRef.current?.play().catch(e => console.log('Audio play failed:', e));

      // Wait for 3 seconds before transitioning
      setTimeout(() => {
        onSubmit(name.trim());
      }, 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent Enter key from submitting
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="relative h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        <audio
          ref={audioRef}
          src=".mp3"
          preload="auto"
          loop
        />

        {/* Background big HACKCLUB text */}
        <h1 className="absolute text-[12rem] font-extrabold text-gray-700 opacity-10 select-none">
          HACKCLUB
          <br />
          ONBOARDING
        </h1>

        <div className="flex items-center space-x-16 z-10">
          {/* Custom Input */}
          <div className="input-container">
            <input
              required
              type="text"
              name="text"
              className="custom-input"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <label className="input-label">Enter your Name</label>
            {isWaiting && (
              <div className="text-gray-400 text-sm mt-2">please wait</div>
            )}
          </div>

          {/* Custom Switch Button */}
          <label className="custom-switch">
            <input
              type="checkbox"
              checked={isButtonPressed}
              onChange={handleSubmit}
              disabled={!name.trim() || isWaiting}
            />
            <div className="switch-button">
              <div className="light"></div>
              <div className="dots"></div>
              <div className="characters"></div>
              <div className="shine"></div>
              <div className="shadow"></div>
            </div>
          </label>
        </div>
      </div>

      <style jsx>{`
        .input-container {
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          color: white;
        }

        .input-container .input-label {
          font-size: 15px;
          padding-left: 10px;
          position: absolute;
          top: 13px;
          transition: 0.3s;
          pointer-events: none;
          color: #9ca3af;
        }

        .custom-input {
          width: 300px;
          height: 45px;
          border: none;
          outline: none;
          padding: 0px 15px;
          border-radius: 6px;
          color: #fff;
          font-size: 15px;
          background-color: transparent;
          box-shadow: 3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255, 255, 255, 0.4);
        }

        .custom-input:focus {
          border: 2px solid transparent;
          color: #fff;
          box-shadow: 3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255, 255, 255, 0.4), inset 3px 3px 10px rgba(0,0,0,1), inset -1px -1px 6px rgba(255, 255, 255, 0.4);
        }

        .input-container .custom-input:valid ~ .input-label,
        .input-container .custom-input:focus ~ .input-label {
          transition: 0.3s;
          padding-left: 2px;
          transform: translateY(-35px);
          color: #fff;
        }

        .custom-switch {
          display: block;
          background-color: black;
          width: 100px;
          height: 130px;
          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0 1px 2px black, inset 0 2px 2px -2px white, inset 0 0 2px 15px #47434c, inset 0 0 2px 22px black;
          border-radius: 5px;
          padding: 15px;
          perspective: 700px;
        }

        .custom-switch input {
          display: none;
        }

        .custom-switch input:checked + .switch-button {
          transform: translateZ(20px) rotateX(25deg);
          box-shadow: 0 -10px 20px #ff1818;
        }

        .custom-switch input:checked + .switch-button .light {
          animation: flicker 0.2s infinite 0.3s;
        }

        .custom-switch input:checked + .switch-button .shine {
          opacity: 1;
        }

        .custom-switch input:checked + .switch-button .shadow {
          opacity: 0;
        }

        .switch-button {
          display: block;
          transition: all 0.3s cubic-bezier(1, 0, 1, 1);
          transform-origin: center center -20px;
          transform: translateZ(20px) rotateX(-25deg);
          transform-style: preserve-3d;
          background-color: #9b0621;
          height: 100%;
          position: relative;
          cursor: pointer;
          background: linear-gradient(#980000 0%, #6f0000 30%, #6f0000 70%, #980000 100%);
          background-repeat: no-repeat;
        }

        .switch-button::before {
          content: "";
          background: linear-gradient(rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.3) 30%, #650000 75%, #320000) 50% 50%/97% 97%, #b10000;
          background-repeat: no-repeat;
          width: 100%;
          height: 50px;
          transform-origin: top;
          transform: rotateX(-90deg);
          position: absolute;
          top: 0;
        }

        .switch-button::after {
          content: "";
          background-image: linear-gradient(#650000, #320000);
          width: 100%;
          height: 50px;
          transform-origin: top;
          transform: translateY(50px) rotateX(-90deg);
          position: absolute;
          bottom: 0;
          box-shadow: 0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5);
        }

        .light {
          opacity: 0;
          animation: light-off 1s;
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#ffc97e, #ff1818 40%, transparent 70%);
        }

        .dots {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(transparent 30%, rgba(101, 0, 0, 0.7) 70%);
          background-size: 10px 10px;
        }

        .characters {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(white, white) 50% 20%/5% 20%, radial-gradient(circle, transparent 50%, white 52%, white 70%, transparent 72%) 50% 80%/33% 25%;
          background-repeat: no-repeat;
        }

        .shine {
          transition: all 0.3s cubic-bezier(1, 0, 1, 1);
          opacity: 0.3;
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(white, transparent 3%) 50% 50%/97% 97%, linear-gradient(rgba(255, 255, 255, 0.5), transparent 50%, transparent 80%, rgba(255, 255, 255, 0.5)) 50% 50%/97% 97%;
          background-repeat: no-repeat;
        }

        .shadow {
          transition: all 0.3s cubic-bezier(1, 0, 1, 1);
          opacity: 1;
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8));
          background-repeat: no-repeat;
        }

        @keyframes flicker {
          0% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        @keyframes light-off {
          0% { opacity: 1; }
          80% { opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default WelcomePage;
