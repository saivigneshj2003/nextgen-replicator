
export interface ContentItem {
  id: string;
  title: string;
  type: 'MOVIE' | 'SHOW';
  dateAdded: string;
  releaseYear: number;
  rating: string;
  description: string;
}

export interface SearchResults {
  query: string;
  results: ContentItem[];
}
