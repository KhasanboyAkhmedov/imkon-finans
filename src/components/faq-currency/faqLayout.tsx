import './faqLayout.css';
import { redDots } from '../../assets';
import { formatDate } from '../../commons';
import CurrencyList from './currencyList';
import FAQAccordion from './faq-accordion';
import { useTranslation } from 'react-i18next';

const FAQLayout = () => {
    const { t } = useTranslation('main', { keyPrefix: 'faq' });
    const formattedDate = formatDate();
    return (
      <div className="layout-wrapper">
        <div className="header-background">
          <img className="dots-pattern dots-left" src={redDots} alt="red-dots" />
          <img className="dots-pattern dots-right" src={redDots} alt="red-dots" />
        </div>


        <div className="content-container">
          <div className='faq'>
            <div className='section-name'>
              <span>●</span> {t('section_badge')}
            </div>

            <h1 className='section-name__title'>{t('title')}</h1>
            
            <FAQAccordion/>
          </div>
          <div className='currency'>
            <div className='section-name'>
              <span>●</span> {t('currency_badge')}
            </div>

            <h1 className='section-name__title'>
              {t('currency_title')} ({formattedDate})
            </h1>
            
            <CurrencyList />
            
            <p className='section-name__description currency-source'>
              {t('source')}:{' '}
              <a 
                href="https://cbu.uz/uz/arkhiv-kursov-valyut/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('source_name')}
              </a>
              <br />
              {t('updated_date')}: {formattedDate}
            </p>
          </div>
        </div>
      </div>
    );
};

export default FAQLayout;