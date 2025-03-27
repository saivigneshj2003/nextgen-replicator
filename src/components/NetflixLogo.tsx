
import React from 'react';
import { Link } from 'react-router-dom';

interface NetflixLogoProps {
  className?: string;
}

const NetflixLogo: React.FC<NetflixLogoProps> = ({ className = "" }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <h1 className="text-netflix-red text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter netflix-heading">
        NETFLIX
      </h1>
    </Link>
  );
};

export default NetflixLogo;
