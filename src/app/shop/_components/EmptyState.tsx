'use client';

import React from 'react';

type Props = {
  onReset: () => void;
};

const EmptyState = ({ onReset }: Props) => {
  return (
    <div className="text-center py-20">
      <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-medium mt-6">No products found</h3>
      <p className="text-gray-500 mt-2 max-w-md mx-auto">
        We couldn&apos;t find any products matching your filters. Try adjusting your selection.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        onClick={onReset}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default EmptyState;
