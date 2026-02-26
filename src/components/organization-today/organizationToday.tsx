import React from 'react';
import './organizationToday.css';
import { documentIcon, infoIcon } from '../../assets';
import { useTranslation } from 'react-i18next';


const OrganizationToday: React.FC = () => {
  const { t } = useTranslation('main', { keyPrefix: 'organization_today' });
  const MKT_DATA = [
    { id: 1, text: t('features.experience'), isInfo: false },
    { id: 2, text: t('features.joint_stock'), isInfo: false },
    { id: 3, text: t('features.rating'), isInfo: false },
    { id: 4, text: t('features.securities'), isInfo: false },
    { id: 5, text: t('features.audit'), isInfo: false },
    { id: 6, text: t('features.iso'), isInfo: true },
  ];

  return (
    <section className="mkt-section">
      <h2 className="mkt-title">{t('title')}</h2>
      <div className="mkt-grid">
        {MKT_DATA.map((item) => (
          <div 
            key={item.id} 
            className="mkt-card" 
          >
            <div className="mkt-icon-wrapper">
              {item.isInfo ? (
                <img className="mkt-file-icon" src={infoIcon} alt='document'/>
              ) : (
                <img className="mkt-file-icon" src={documentIcon} alt='document'/>
              )}
            </div>
            <p className="mkt-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrganizationToday;