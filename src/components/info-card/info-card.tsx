import React, { useState } from 'react';
import './info-card.css';
import type { InfoCardProps } from './info-card.types';
import { formatDate, getEmbedUrl } from '../../commons';
// import { HiOutlineArrowRight } from 'react-icons/hi';

export const InfoCard: React.FC<InfoCardProps> = ({ item, index, navigateUrl, showDate = true, isClickable = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isEven = index % 2 === 0;
  const hasMedia = !!(item.imageUrl || item.videoUrl);
  
  const formattedDate = item.createdAt && showDate
    ? formatDate(item.createdAt) 
    : null;

  const renderMedia = () => {
    if (!hasMedia) return null;
    const mediaClass = isEven ? 'media-float-left' : 'media-float-right';
    
    return (
      <div className={`info-media-container ${mediaClass}`}>
        {!isLoaded && <div className="media-skeleton" />}
        {item.videoUrl ? (
          <iframe
            src={getEmbedUrl(item.videoUrl)}
            title={item.title}
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
            className={`info-media-element ${isLoaded ? 'opacity-100' : 'opacity-0 blur-xl'}`}
            loading="lazy"
          />
        ) : (
          <img
            src={item.imageUrl}
            alt={item.title} 
            onLoad={() => setIsLoaded(true)}
            className={`info-media-element ${isLoaded ? 'opacity-100' : 'opacity-0 blur-xl'}`} loading="lazy" decoding="async"/>
        )}
      </div>
    );
  };

  const cardContent = (
    <div className={`info-card-wrapper clearfix ${!hasMedia ? 'no-media' : ''} ${isClickable ? 'is-clickable' : ''}`}>
      {renderMedia()}
      
      <div className="info-text-content">
        {formattedDate && showDate && <span className="info-date-badge">{formattedDate}</span>}
        
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