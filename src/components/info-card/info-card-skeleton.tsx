import './info-card-skeleton.css';

const InfoCardSkeleton: React.FC<{ index: number }> = ({ index }) => {
  const isEven = index % 2 === 0;
  const mediaClass = isEven ? 'media-float-left' : 'media-float-right';

  return (
    <div className="info-card-wrapper clearfix">
      <div className={`info-media-container ${mediaClass}`}>
        <div className="media-skeleton" />
      </div>

      <div className="info-text-content">
        <div className="skeleton skeleton-date-badge" />
        <div className="skeleton skeleton-title-line" />
        <div className="skeleton skeleton-desc-line" />
        <div className="skeleton skeleton-desc-line" />
        <div className="skeleton skeleton-desc-line short" />
      </div>
    </div>
  );
};

export default InfoCardSkeleton