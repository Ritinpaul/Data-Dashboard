import { useState } from 'react';

const FilterBar = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState('');
  const [sortOption, setSortOption] = useState('title');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
      <input
        className="border p-2 rounded w-full md:w-1/2 bg-gray-200 dark:bg-gray-700"
        type="text"
        placeholder="Search by movie title..."
        value={filter}
        onChange={handleFilterChange}
      />
      <select
        className="border p-2 rounded w-full md:w-1/4  bg-gray-200 dark:bg-gray-700"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="title">Sort by Title</option>
        <option value="year">Sort by Year</option>
        <option value="rating">Sort by IMDb Rating</option>
      </select>
    </div>
  );
};

export default FilterBar;
