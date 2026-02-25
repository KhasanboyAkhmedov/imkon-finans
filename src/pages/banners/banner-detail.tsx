import { useEffect, useState, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { useLanguage } from '../../hooks/useLanguage';
import { message, Empty } from 'antd';
import { FaAngleLeft } from 'react-icons/fa6';
import BannerDetailSkeleton from './banner-detail-skeleton';
import './banner-detail.css';

interface LocalizedContent {
  title: string;
  description: string;
  features: string[];
}

interface BannerData {
  _id: string;
  uzb: LocalizedContent;
  rus: LocalizedContent;
  eng: LocalizedContent;
}

const BannerDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { lang } = useLanguage();

  useEffect(() => {
    const fetchBanner = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/banners/one/${id}`);
        const result = await response.json();
        if (!response.ok || result.message) {
            setData(null);
        } else {
            setData(result);
        }
      } catch {
        message.error("Ma'lumotni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBanner();
  }, [id]);

  const handleBack = () => navigate('/');

  if (loading) return <BannerDetailSkeleton />;

  if (!data) {
    return (
      <section className="banner-info-section">
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

  const content = data[lang as keyof Pick<BannerData, 'uzb' | 'rus' | 'eng'>] || data.uzb;

  return (
    <section className="banner-info-section">
      <div className="container">
        <div onClick={handleBack} className="go-back-button">
            <FaAngleLeft className='back-icon'/> 
            <p className='back-text'>Orqaga</p>
        </div>

        <div className="info-header">
          <h1 className="info-title">{content.title}</h1>
        </div>

        <div className="info-layout">
          <div className="info-content">
            <div className="content-block">
              <h3 className="block-title">
                {lang === 'uzb' ? 'Tavsif' : lang === 'rus' ? 'Описание' : 'Description'}
              </h3>
              <p className="description-text">{content.description}</p>
            </div>
          </div>

          <aside className="info-sidebar">
            <div className="benefits-grid">
              <h3 className="block-title" style={{ fontSize: '20px' }}>
                {lang === 'uzb' ? 'Afzalliklar' : lang === 'rus' ? 'Преимущества' : 'Features'}
              </h3>
              {content.features?.map((feature, index) => (
                <div key={index} className="benefit-card">
                  <HiOutlineBadgeCheck className="benefit-icon-box" />
                  <span className="benefit-text">{feature}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BannerDetail;