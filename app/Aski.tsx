import React from 'react';
import ASCIIText from './components/ASCIIText/ASCIIText';

const Asciipage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* ASCII Text - centered horizontally and vertically */}
      <ASCIIText
        text="Welcome2HackClub!"
        enableWaves={true}
        asciiFontSize={8}
        textFontSize={15}
      />
    </div>
  );
};

export default Asciipage;
