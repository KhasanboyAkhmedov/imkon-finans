import { useEffect, useState, type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { useLanguage } from '../../hooks/useLanguage';
import { Empty } from 'antd';
import { FaAngleLeft } from 'react-icons/fa6';
import BannerDetailSkeleton from './banner-detail-skeleton';
import './banner-detail.css';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('pages', { keyPrefix: 'errors' });
  const { t: tBannerDetail } = useTranslation('pages', { keyPrefix: 'banner_detail' });

  
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
          console.log(t('data_load_error'));
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
            <p className='back-text'>{t('back')}</p>
          </div>
          <div className="error-message">
                <Empty description={false} className='empty-box' />
                <p className='error-text'>{t('not_found')}</p>
                <button onClick={handleBack} className="back-button">{t('back_home')}</button>
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
            <p className='back-text'>{t('back')}</p>
        </div>

        <div className="info-header">
          <h1 className="info-title">{content.title}</h1>
        </div>

        <div className="info-layout">
          <div className="info-content">
            <div className="content-block">
              <h3 className="block-title">{tBannerDetail('description_label')}</h3>
              <p className="description-text">{content.description}</p>
            </div>
          </div>

          <aside className="info-sidebar">
            <div className="benefits-grid">
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