import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import './vacancyInfo.css';
import { type Vacancy } from '../vacancies/vacancies.data';
import { type FC, useEffect, useState } from 'react';
import { BiCheckDouble } from 'react-icons/bi';
import VacancyInfoSkeleton from './vacanvyInfoSkeleton';
import { Empty } from 'antd';
import { FaAngleLeft } from 'react-icons/fa6';

const VacancyInfo: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVacancy = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs/one/${id}`);
        const result = await response.json();
        
        setData(result);
      } catch (error) {
        console.error("Failed to fetch vacancy details:", error);
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
                <p className='back-text'>Orqaga</p>
            </div>

            <div className="error-message">
                <Empty description={false} className='empty-box' />
                <p className='error-text'>Ma'lumot topilmadi.</p>
                <button onClick={handleBack} className="back-button">
                    Ortga qaytish
                </button>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section className="vacancy-info-section">
      <div className="container">
        <div className="info-header">
          <h1 className="info-title">{data.title}</h1>
          <div className="info-badge-wrapper">
            <span className="info-badge-dot">●</span>
            <span className="info-badge-text">{data.hours}</span>
          </div>
        </div>

        <div className="info-layout">
          <div className="info-content">
            <div className="content-block">
              <h3 className="block-title">Ish tavsifi</h3>
              <p className="description-text">{data.description}</p>
            </div>

            <div className="content-block">
              <h3 className="block-title">Talablar</h3>
              <ul className="requirements-list">
                {data.requirements?.map((req, index) => (
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
              {data.benefits?.map((benefit, index) => (
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