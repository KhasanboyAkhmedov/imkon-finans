import './faqLayout.css';
import { redDots } from '../../assets';
import { formatDate } from '../../commons';
import CurrencyList from './currencyList';
import FAQAccordion from './faq-accordion';

const FAQLayout = () => {
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
              <span>●</span> Savollar
            </div>

            <h1 className='section-name__title'>
              Ko'p so'raladigan savollar
            </h1>
            
            <p className='section-name__description'>
              Our Fintech banking service revolutionizes the way you manage your money, 
              offering seamless, secure, and smart solutions for all your financial needs.
            </p>

            <FAQAccordion/>
          </div>
          <div className='currency'>
            <div className='section-name'>
              <span>●</span> Marzakiy bank kurslari
            </div>

            <h1 className='section-name__title'>
              Valyuta kurslari ({formattedDate})
            </h1>
            
            <CurrencyList />
            
            <p className='section-name__description'>
              Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.
            </p>
          </div>
        </div>
      </div>
    );
};

export default FAQLayout;