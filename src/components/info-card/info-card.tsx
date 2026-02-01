import React from 'react';
import './info-card.css';
import type { InfoCardProps } from './info-card.types';
import { formatDate } from '../../commons';
// import { HiOutlineArrowRight } from 'react-icons/hi';

export const InfoCard: React.FC<InfoCardProps> = ({ item, index, navigateUrl, isClickable = false }) => {
  const isEven = index % 2 === 0;
  const hasMedia = !!(item.imageUrl || item.videoUrl);
  
  const formattedDate = item.createdAt 
    ? formatDate(item.createdAt) 
    : null;

  const renderMedia = () => {
    if (!hasMedia) return null;
    const mediaClass = isEven ? 'media-float-left' : 'media-float-right';
    
    return (
      <div className={`info-media-container ${mediaClass}`}>
        {item.videoUrl ? (
          <iframe
            src={item.videoUrl}
            title={item.title}
            allowFullScreen
            className="info-media-element"
            loading="lazy"
          />
        ) : (
          <img src={item.imageUrl} alt={item.title} className="info-media-element" loading="lazy" decoding="async"/>
        )}
      </div>
    );
  };

  const cardContent = (
    <div className={`info-card-wrapper clearfix ${!hasMedia ? 'no-media' : ''} ${isClickable ? 'is-clickable' : ''}`}>
      {renderMedia()}
      
      <div className="info-text-content">
        {formattedDate && <span className="info-date-badge">{formattedDate}</span>}
        
        <h2 className="info-title">{item.title}</h2>
        
        <p className="info-description">
          {item.description}
        </p>
        
        {/* {isClickable && (
          <button className='info-read-more-btn'>
            Batafsil <HiOutlineArrowRight className="info-read-more-btn-icon" />
          </button>
        )} */}
      </div>
    </div>
  );

  return isClickable ? (
    <a href={navigateUrl} className="info-card-anchor-wrapper">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};