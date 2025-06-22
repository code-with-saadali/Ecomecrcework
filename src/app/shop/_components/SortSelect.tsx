'use client';

import React from 'react';

type SortOption = {
  id: string;
  name: string;
};

type Props = {
  sortOption: string;
  setSortOption: (val: string) => void;
  sortOptions: SortOption[];
};

const SortSelect = ({ sortOption, setSortOption, sortOptions }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-600 text-sm">Sort by:</span>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black min-w-[180px]"
      >
        {sortOptions.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
