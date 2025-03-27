
import React from 'react';
import { ContentItem } from '@/types/content';
import ContentCard from './ContentCard';

interface RecommendationResultsProps {
  query: string;
  results: ContentItem[];
}

const RecommendationResults: React.FC<RecommendationResultsProps> = ({ query, results }) => {
  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-4xl font-bold text-white mb-10 text-center uppercase netflix-heading">
        Content Similar to {query} are:
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {results.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationResults;
