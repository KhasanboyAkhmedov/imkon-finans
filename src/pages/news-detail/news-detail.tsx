import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { type NewsDetailType } from './news-detail.data';
import './news-detail.css';
import { FaAngleLeft } from 'react-icons/fa6';
import { Empty } from 'antd';
import { formatDate } from '../../commons';
import { useLanguage } from '../../hooks/useLanguage';
import type { TLanguage } from '../../types/language.types';
import { useTranslation } from 'react-i18next';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [item, setItem] = useState<NewsDetailType | null>(null);
  const { lang } = useLanguage() as { lang: TLanguage };
  const { t } = useTranslation('pages', { keyPrefix: 'errors' });
  
  useEffect(() => {
    const fetchNewsDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/news/one/${id}`);
        const result = await response.json();

        if (!response.ok || result.message === "Not found.") {
          setItem(null);
          console.log(t('no_data'));
        } else {
          setItem(result);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsDetail();
    }
  }, [id]);

  if (!loading && !item) {
    return (
      <div className="news-container">
        <div className="news-content container">
          <div onClick={() => navigate(-1)} className="go-back-button">
            <FaAngleLeft className='back-icon'/> 
            <p className='back-text'>{t('back')}</p>
          </div>
          <div className="error-message">
            <Empty description={false} className='empty-box' />
            <p className='error-text'>{t('no_data')}</p>
            <button onClick={() => navigate('/news')} className="back-button">{t('back_home')}</button>
          </div>
        </div>
      </div>
    );
  }
  
  const content = item ? (item[lang] || item.uzb) : null;

  return (
    <div className="news-container">
      <div className="news-content container">
        <div onClick={() => navigate(-1)} className="go-back-button">
          <FaAngleLeft className='back-icon'/> 
          <p className='back-text'>{t('back')}</p>
        </div>

        {loading ? (
          <div className="skeleton-wrapper">
            <div className="skeleton skeleton-date"></div>
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-title short"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text last"></div>
          </div>
        ) : (
          <article className="detail-article">
              <div className="date-badge">{formatDate(item?.createdAt)}</div>
              <h1 className="detail-main-title">{content?.title}</h1>
              
              <div className="detail-content-flow clearfix">
                  <div className="detail-media-aside">
                    {!isLoaded && <div className="media-skeleton" />}
                    {item?.imageUrl && (
                      <img 
                        src={item?.imageUrl} 
                        alt={item?.title}
                        className={`detail-media-element ${isLoaded ? 'opacity-100' : 'opacity-0 blur-xl'}`}
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(false)}
                        loading="lazy" decoding="async"
                      />
                    )}
                  </div>
                  
                  <div className="detail-text-body">
                      {content?.description}
                  </div>
              </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;