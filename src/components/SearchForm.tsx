
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchFormProps {
  onSearch?: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query);
      } else {
        navigate(`/results?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
        <div className="w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ENTER A MOVIE/SHOW"
            className="netflix-input text-center text-lg"
            aria-label="Search for a movie or show"
          />
        </div>
        <button 
          type="submit" 
          className="netflix-button px-8 py-3 rounded w-full max-w-xs text-xl uppercase font-semibold tracking-wide"
        >
          Suggest Similar Content
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
