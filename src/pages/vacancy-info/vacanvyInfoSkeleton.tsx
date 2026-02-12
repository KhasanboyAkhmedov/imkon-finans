import React from 'react';
import './vacancyInfo.css';
import './vacancyInfoSkeleton.css';

const VacancyInfoSkeleton: React.FC = () => {
  return (
    <section className="vacancy-info-section">
      <div className="container">
        <div className="info-header">
          <div className="skeleton-shimmer info-title-skeleton"></div>
          <div className="skeleton-shimmer info-badge-skeleton"></div>
        </div>

        <div className="info-layout">
          <div className="info-content">
            <div className="content-block">
              <div className="skeleton-shimmer block-title-skeleton"></div>
              <div className="skeleton-shimmer text-line"></div>
              <div className="skeleton-shimmer text-line"></div>
              <div className="skeleton-shimmer text-line-short"></div>
            </div>

            <div className="content-block" style={{ marginTop: '40px' }}>
              <div className="skeleton-shimmer block-title-skeleton"></div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="req-item-skeleton">
                  <div className="skeleton-shimmer icon-skeleton"></div>
                  <div className="skeleton-shimmer text-line"></div>
                </div>
              ))}
            </div>
          </div>

          <aside className="info-sidebar">
            <div className="benefits-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="benefit-card skeleton-benefit">
                   <div className="skeleton-shimmer icon-skeleton"></div>
                   <div className="skeleton-shimmer text-line" style={{ width: '60%' }}></div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VacancyInfoSkeleton;