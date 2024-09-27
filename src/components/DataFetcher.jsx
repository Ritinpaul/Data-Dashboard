import axios from 'axios';
import { useEffect, useState } from 'react';

const DataFetcher = ({ query, onDataFetched }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {

      setError(null);
      try {
        const searchResponse = await axios.get(
          `http://www.omdbapi.com/?apikey=885353e7&s=${query}&type=movie`
        );
        if (searchResponse.data.Response === 'True') {
          // Fetch detailed data for each movie
          const detailedData = await Promise.all(
            searchResponse.data.Search.map(async (movie) => {
              const detailResponse = await axios.get(
                `http://www.omdbapi.com/?apikey=885353e7&i=${movie.imdbID}`
              );
              
              return detailResponse.data;
            })
          );
          
          onDataFetched(detailedData);
        } else {
          onDataFetched([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, onDataFetched]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  return null;
};

export default DataFetcher;
