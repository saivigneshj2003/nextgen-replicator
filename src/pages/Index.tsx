
import React, { useState, useEffect } from 'react';
import NetflixLogo from '@/components/NetflixLogo';
import SearchForm from '@/components/SearchForm';
import RecommendationResults from '@/components/RecommendationResults';
import NetflixIntro from '@/components/NetflixIntro';
import { ContentItem } from '@/types/content';
import { sampleMovies } from '@/data/sampleMovies';
import { Link } from 'react-router-dom';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [searchResults, setSearchResults] = useState<{
    query: string;
    results: ContentItem[];
  } | null>(null);

  useEffect(() => {
    // Hide intro after 4 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    // In a real app, this would call an API
    // For now, we'll just return our sample data
    setSearchResults({
      query,
      results: sampleMovies
    });
  };

  return (
    <>
      {showIntro && <NetflixIntro />}
      <div className={`min-h-screen flex flex-col transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <header className="w-full pt-8 pb-4 flex justify-center items-center">
          <NetflixLogo />
        </header>
        
        <main className="flex-1 netflix-container py-8 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center netflix-heading">
            MOVIES AND SHOWS RECOMMENDATION SYSTEM
          </h2>
          
          {!searchResults ? (
            <div className="max-w-2xl w-full mx-auto mt-16 flex flex-col items-center bg-[#222222] p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-10 text-center netflix-heading">
                ENTER THE DETAILS BELOW
              </h3>
              <SearchForm onSearch={handleSearch} />
            </div>
          ) : (
            <RecommendationResults 
              query={searchResults.query} 
              results={searchResults.results} 
            />
          )}
          
          {!searchResults && (
            <div className="mt-12 text-center">
              <Link 
                to="/data-analysis" 
                className="text-white hover:text-netflix-red transition-colors duration-300"
              >
                View Exploratory Data Analysis
              </Link>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Index;
