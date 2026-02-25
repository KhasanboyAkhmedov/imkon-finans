import React from 'react';
import { Skeleton } from 'antd';
import './creditCard.css';
import './credit-card-skeleton.css';

export const CreditCardSkeleton: React.FC = () => {
  return (
    <div className="product-card skeleton-active">
      <div className="product-card-title-wrapper">
        <div className="product-card-iconWrapper">
          <Skeleton.Avatar active shape="square" size='large' />
        </div>
        <Skeleton.Input active className="skeleton-title-line" />
      </div>
      
      <div className="product-card-description skeleton-description-block">
        <Skeleton active paragraph={{ rows: 2, width: ['100%', '80%'] }} title={false} />
      </div>
      
      <div className="product-card-button skeleton-button-wrapper">
        <Skeleton.Button active className="skeleton-button-shape" />
      </div>

      <div className="product-card-bgIcon">
         <Skeleton.Avatar active className="skeleton-bg-circle" />
      </div>
    </div>
  );
};