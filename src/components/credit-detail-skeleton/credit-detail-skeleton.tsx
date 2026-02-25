import React from 'react';
import { Skeleton } from 'antd';
import './credit-detail-skeleton.css';

const CreditDetailSkeleton: React.FC = () => {
  return (
    <section className="credit-detail-section skeleton-loading">
        <div className="container">
            <div className="detail-header">
                <div className="detail-heading">
                    <div className="detail-icon-box skeleton-icon-box">
                        <Skeleton.Avatar active shape="square" className="skeleton-avatar-main" />
                    </div>
                    <Skeleton.Input active className="skeleton-title-text" />
                </div>
                <div className="detail-header-btn-skeleton">
                    <Skeleton.Button active shape="round" className="skeleton-header-btn" />
                </div>
            </div>

            <div className="detail-main-layout">
                <div className="detail-tabs-list">
                    {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="detail-tab-item skeleton-tab">
                        <Skeleton.Input active className="skeleton-tab-text" />
                    </div>
                    ))}
                </div>

                <div className="detail-display-card skeleton-card">
                    <Skeleton.Input active className="skeleton-card-header" />
                    
                    <div className="display-card-body skeleton-card-body">
                        <Skeleton active paragraph={{ rows: 2 }} title={false} />
                    </div>

                    <Skeleton.Input active className="skeleton-card-footer" />
                    
                    <div className="detail-watermark skeleton-watermark-wrapper">
                        <Skeleton.Avatar active className="skeleton-watermark-avatar" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CreditDetailSkeleton;