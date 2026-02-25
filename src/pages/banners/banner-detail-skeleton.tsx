import React from 'react';
import './banner-detail.css';

const BannerDetailSkeleton: React.FC = () => {
  return (
    <section className="banner-detail-section">
      <div className="container">
        <div className="skeleton-shimmer back-btn-skeleton"></div>
        
        <div className="banner-detail-grid">
          <div className="skeleton-shimmer banner-img-skeleton"></div>
          
          <div className="banner-info-container">
            <div className="skeleton-shimmer title-skeleton"></div>
            <div className="skeleton-shimmer line-skeleton"></div>
            <div className="skeleton-shimmer line-skeleton"></div>
            <div className="skeleton-shimmer line-skeleton-short"></div>
            
            <div className="features-skeleton-group">
              {[1, 2, 3].map((i) => (
                <div key={i} className="feature-item-skeleton">
                  <div className="skeleton-shimmer icon-skeleton"></div>
                  <div className="skeleton-shimmer line-skeleton"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetailSkeleton;