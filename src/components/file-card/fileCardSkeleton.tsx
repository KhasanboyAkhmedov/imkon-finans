import React from 'react';
import './fileCardSkeleton.css'
import './file-card.css';

const FileCardSkeleton: React.FC = () => {
  return (
    <div className="file-card-container">
      <div className="file-icon-wrapper skeleton-icon" />

      <div className="skeleton-line skeleton-title" />
      <div className="skeleton-line skeleton-title-short" />

      <div className="file-info">
        <div className="skeleton-line skeleton-meta" />
        <div className="skeleton-circle" />
      </div>
    </div>
  );
};

export default FileCardSkeleton;