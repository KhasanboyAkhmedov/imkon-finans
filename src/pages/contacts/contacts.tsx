import './contacts.css';
import ContactCard from '../../components/contacts/contactCard';
import ContactForm from '../../components/contacts/contactForm';
import Branches from '../../components/contacts/branches';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'contacts' });
  return (
    <section className='contacts-section'>
        <div className='container'>
            <h2 className="section-title">{t('main_title')}</h2>
            <div className="top-section">
                <ContactCard />
                <ContactForm />
            </div>
            <Branches />
        </div>
    </section>
  )
}

export default Contacts