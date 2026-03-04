import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import './vacancyInfo.css';
import { type Vacancy } from '../vacancies/vacancies.data';
import { type FC, useEffect, useState } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import VacancyInfoSkeleton from './vacanvyInfoSkeleton';
import { Empty } from 'antd';
import { FaAngleLeft } from 'react-icons/fa6';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const VacancyInfo: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { t } = useTranslation('pages', { keyPrefix: 'vacancies' });
  const { t: tErrors } = useTranslation('pages', { keyPrefix: 'errors' });


  useEffect(() => {
    const fetchVacancy = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/one/${id}`);
        
        if (!response.ok) {
          setData(null);
          return;
        }
        const result = await response.json();

        if (result && (result.uzb || result.rus || result.eng)) {
          setData(result);
        } else {
          setData(null);
        }
      } catch {
        setData(null);
        console.error(tErrors('data_load_error'));
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchVacancy();
    }
  }, [id]);

  if (loading) {
    return <VacancyInfoSkeleton />;
  }
  const handleBack = () => navigate(-1);

  if (!data) {
    return (
      <section className='detail-container'>
        <div className="container">
            <div onClick={handleBack} className="go-back-button">
                <FaAngleLeft className='back-icon'/> 
                <p className='back-text'>{tErrors('back')}</p>
            </div>

            <div className="error-message">
                <Empty description={false} className='empty-box' />
                <p className='error-text'>{tErrors('no_data')}</p>
                <button onClick={handleBack} className="back-button">{tErrors('back_home')}</button>
            </div>
        </div>
      </section>
    );
  }
  
  const content = data[lang as keyof Pick<Vacancy, 'uzb' | 'rus' | 'eng'>] || data.uzb;

  return (
    <section className="vacancy-info-section">
      <div className="container">
        <div className="info-header">
          <h1 className="info-title">{content.title}</h1>
          <div className="info-badge-wrapper">
            <span className="info-badge-dot">●</span>
            <span className="info-badge-text">{content.hours}</span>
          </div>
        </div>

        <div className="info-layout">
          <div className="info-content">
            <div className="content-block">
              <h3 className="block-title">{t('description')}</h3>
              <p className="description-text">{content.description}</p>
            </div>

            <div className="content-block">
              <h3 className="block-title">{t('requirements')}</h3>
              <ul className="requirements-list">
                {content.requirements?.map((req, index) => (
                  <li key={index} className="req-item">
                    <BiCheckDouble className="req-icon" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="info-sidebar">
            <div className="benefits-grid">
              {content.benefits?.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <HiOutlineBadgeCheck className="benefit-icon-box" />
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VacancyInfo;