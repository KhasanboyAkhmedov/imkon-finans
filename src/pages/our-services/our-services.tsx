import { HiOutlineBadgeCheck } from "react-icons/hi"
import './our-services.css';
import OurServicesTab from "../../components/our-services/ourServicesTab";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'services' });
  const localizedWhatWeDo = t('what_we_do', { returnObjects: true }) as string[];
  return (
    <section className="our-services-section container">
      <div className="our-services-container container">
        <h2 className="section-title">{t('title')}</h2>
        <div className="our-services-grid">
          {Array.isArray(localizedWhatWeDo) && localizedWhatWeDo.map((item, index) => (
            <div key={index} className="our-service-card">
                <HiOutlineBadgeCheck className="our-service-icon-box" />
                <span className="our-service-text">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <OurServicesTab />
    </section>
  )
}

export default OurServices