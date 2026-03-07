import { useTranslation } from 'react-i18next';
import './not-found.css';

const NotFound = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'not_found' });
  
  return (
    <div className="page-wrapper ">
      <div className="card container">
        <div className="graphic-container">
          <span className="digit">404</span>
        </div>

        <h1 className="status-title">{t('page_not_found')}</h1>
        <p className="status-subtitle">{t('subtitle')}</p>

        <button 
          className="back-button" 
          onClick={() => window.location.href = '/'}
        >
          {t('back_home')}
        </button>
      </div>
    </div>
  )
}

export default NotFound