import { useState, useEffect, useContext } from 'react';
import DataFetcher from '../components/DataFetcher';
import BarChartComponent from '../components/BarChartComponent';
import DoughnutChartComponent from '../components/DoughnutChartComponent';
import FilterBar from '../components/FilterBar';
import { ThemeContext } from '../context/ThemeContext';

const Dashboard = () => {
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState('');
  const [sortOption, setSortOption] = useState('title');
  const { theme } = useContext(ThemeContext);

  const handleDataFetched = (data) => {
    setMovieData(data);
  };

  const sortedData = [...movieData].sort((a, b) => {
    if (sortOption === 'title') {
      return a.Title.localeCompare(b.Title);
    } else if (sortOption === 'year') {
      return parseInt(a.Year) - parseInt(b.Year);
    } else if (sortOption === 'rating') {
      return parseFloat(b.imdbRating) - parseFloat(a.imdbRating);
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (query) {
        setQuery((prevQuery) => prevQuery);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [query]);

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Movie Dashboard</h1>
        <FilterBar onFilterChange={setQuery} onSortChange={setSortOption} />
        <DataFetcher query={query} onDataFetched={handleDataFetched} />
        
        {sortedData.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Movie Release Years</h2>
              <BarChartComponent
                data={sortedData.map((movie) => parseInt(movie.Year))}
                labels={sortedData.map((movie) => movie.Title)}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Movie Ratings Distribution</h2>
              <DoughnutChartComponent
                data={sortedData.map((movie) => parseFloat(movie.imdbRating))}
                labels={sortedData.map((movie) => movie.Title)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
