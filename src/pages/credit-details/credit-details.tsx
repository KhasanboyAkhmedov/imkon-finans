import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './credit-details.css';
import { credits } from './credit-details.data';

const CreditDetail: React.FC = () => {
  const { creditName } = useParams<{ creditName: string }>();
  
  const data = credits.find((c) => c.id === creditName);

  const [activeTabId, setActiveTabId] = useState<string | undefined>(data?.details[0]?.id);

  if (!data) return <Navigate to="/credits" />;

  const activeTab = data.details.find((t) => t.id === activeTabId);
  const Icon = data.icon;

  return (
    <section className="credit-detail-section">
      <div className="container">
        
        <div className="detail-header">
          <div className="detail-icon-box">
            <Icon className="detail-main-icon" />
          </div>
          <h1 className="detail-page-title">{data.title}</h1>
        </div>

        <div className="detail-main-layout">
          
          <div className="detail-tabs-list">
            {data.details.map((tab) => (
              <button
                key={tab.id}
                className={`detail-tab-item ${activeTabId === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="detail-display-card">
            <h2 className="display-card-header">{activeTab?.content.title}</h2>
            
            <div className="display-card-body">
              {activeTab?.content.min ? (
                <div className="display-range-wrapper">
                  <div className="range-block">
                    <span className="range-num">{activeTab.content.min}</span>
                    <span className="range-label">{activeTab.content.unitMin}</span>
                  </div>
                  <HiOutlineArrowRight className="range-arrow-icon" />
                  <div className="range-block">
                    <span className="range-num">{activeTab.content.max}</span>
                    <span className="range-label">{activeTab.content.unitMax}</span>
                  </div>
                </div>
              ) : (
                <p className={`display-text ${activeTab?.content.isLargeText ? 'bold-large' : ''}`}>
                  {activeTab?.content.description}
                </p>
              )}
            </div>

            <p className="display-footer-info">{activeTab?.content.footer}</p>
            
            <Icon className="detail-watermark" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CreditDetail;