
import React from 'react';
import { Link } from 'react-router-dom';

interface NetflixLogoProps {
  className?: string;
  animated?: boolean;
}

const NetflixLogo: React.FC<NetflixLogoProps> = ({ className = "", animated = false }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <h1 className={`text-netflix-red text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter netflix-heading ${animated ? 'animate-pulse-subtle' : ''}`}>
        NETFLIX
      </h1>
    </Link>
  );
};

export default NetflixLogo;
