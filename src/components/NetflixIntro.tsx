
import React, { useEffect, useState } from 'react';
import NetflixLogo from './NetflixLogo';

const NetflixIntro: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Start animation sequence
    const timer1 = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // End animation sequence
    const timer2 = setTimeout(() => {
      setAnimationComplete(true);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (animationComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className={`transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <NetflixLogo className="transform scale-150" />
      </div>
    </div>
  );
};

export default NetflixIntro;
