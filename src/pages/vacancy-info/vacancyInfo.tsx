import { useParams } from 'react-router-dom';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import './vacancyInfo.css';
import { VacancyData, type Vacancy } from '../vacancies/vacancies.data';
import type { FC } from 'react';
import { BiCheckDouble } from 'react-icons/bi';

const VacancyInfo: FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const data: Vacancy | undefined = VacancyData.find(
    (item) => item.id === Number(id)
  );

  if (!data) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Vakansiya topilmadi</h2>
      </div>
    );
  }

  return (
    <section className="vacancy-info-section">
      <div className="container">
        <div className="info-header">
          <h1 className="info-title">{data.title}</h1>
          <div className="info-badge-wrapper">
            <span className="info-badge-dot">●</span>
            <span className="info-badge-text">{data.type}</span>
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
                {data.requirements.map((req, index) => (
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
              {data.benefits.map((benefit, index) => (
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