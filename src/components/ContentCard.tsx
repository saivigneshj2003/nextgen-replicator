
import React from 'react';
import { ContentItem } from '@/types/content';

interface ContentCardProps {
  content: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <div className="bg-netflix-mediumgray rounded overflow-hidden shadow-lg card-hover">
      <div className="p-5">
        <h3 className="text-netflix-red text-2xl font-bold mb-3 netflix-heading">
          {content.title}
        </h3>
        
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-netflix-lightgray">TYPE: </span>
            <span className="text-white">{content.type}</span>
          </div>
          
          <div>
            <span className="text-netflix-lightgray">DATE ADDED: </span>
            <span className="text-white">{content.dateAdded}</span>
          </div>
          
          <div>
            <span className="text-netflix-lightgray">RELEASE YEAR: </span>
            <span className="text-white">{content.releaseYear}</span>
          </div>
          
          <div>
            <span className="text-netflix-lightgray">RATING: </span>
            <span className="text-white">{content.rating}</span>
          </div>
          
          <div>
            <span className="text-netflix-lightgray">DESCRIPTION: </span>
            <span className="text-white">{content.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
