'use client';

import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[320px] animate-pulse" />
          <div className="p-5 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded-xl animate-pulse mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
