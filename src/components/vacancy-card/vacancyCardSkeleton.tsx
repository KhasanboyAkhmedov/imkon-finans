import React from 'react';
import './vacancyCard.css';
import './vacancyCardSkleton.css';

const VacancySkeleton: React.FC = () => {
    return (
        <div className="vacancy-card skeleton-card">
            <div className="vacancy-header">
                <div className="vacancy-icon-wrapper skeleton-pulse"/>
                <div className="title-row" style={{ flex: 1 }}>
                    <div className="skeleton-line title-skeleton skeleton-pulse"></div>
                    <div className="skeleton-line badge-skeleton skeleton-pulse"></div>
                </div>
            </div>
            
            <div className="location-row">
                <div className="skeleton-line location-skeleton skeleton-pulse"></div>
            </div>
        
            <div className="vacancy-button skeleton-button skeleton-pulse">
            </div>
        </div>
    );
};

export default VacancySkeleton;