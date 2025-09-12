import React from 'react';
import ASCIIText from './components/ASCIIText/ASCIIText';

const Asciipage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white text-center">
      {/* ASCII Text - centered horizontally and vertically */}
      <ASCIIText
        text={`Welcome\n2\nHackClub!`}
        enableWaves={true}
        asciiFontSize={8}
        textFontSize={15}
      />
    </div>
  );
};

export default Asciipage;
