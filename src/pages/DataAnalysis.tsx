
import React from 'react';
import NetflixLogo from '@/components/NetflixLogo';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DataAnalysis = () => {
  // Sample data for charts
  const genreData = [
    { name: 'Horror', value: 35 },
    { name: 'Comedy', value: 25 },
    { name: 'Drama', value: 20 },
    { name: 'Action', value: 15 },
    { name: 'Sci-Fi', value: 5 },
  ];
  
  const yearData = [
    { year: '2018', count: 12 },
    { year: '2019', count: 19 },
    { year: '2020', count: 25 },
    { year: '2021', count: 32 },
    { year: '2022', count: 18 },
  ];
  
  const COLORS = ['#E50914', '#831010', '#B81D24', '#F85D0B', '#FF8605'];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full pt-8 pb-4 flex justify-center items-center">
        <NetflixLogo />
      </header>
      
      <main className="flex-1 netflix-container py-8">
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-netflix-lightgray hover:text-white transition-colors duration-300"
          >
            &larr; Back to search
          </Link>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center netflix-heading">
          EXPLORATORY DATA ANALYSIS
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="bg-netflix-mediumgray p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 netflix-heading">Content by Genre</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {genreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-netflix-mediumgray p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 netflix-heading">Content by Release Year</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={yearData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#E50914" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-netflix-mediumgray p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 netflix-heading">Viewing Trends</h3>
          <p className="text-netflix-lightgray mb-4">
            Our data analysis shows that horror movies are the most popular genre among our users,
            followed by comedies and dramas. The year 2021 saw the highest number of new content added
            to the platform, with a significant increase in original productions.
          </p>
          <p className="text-netflix-lightgray">
            User engagement metrics indicate that viewers who watch horror movies are more likely to
            binge-watch series in the same genre. Recommendation algorithms have been optimized to
            suggest content based on these viewing patterns.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DataAnalysis;
