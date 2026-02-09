import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NewsDetailData, type NewsDetailType } from './news-detail.data';
import './news-detail.css';
import { FaAngleLeft } from 'react-icons/fa6';
import { Empty } from 'antd';
import { formatDate } from '../../commons';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<NewsDetailType | null | undefined>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundItem = NewsDetailData.find((news) => news.id === id);
      setItem(foundItem);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (!loading && !item) {
    return (
      <div className="news-container">
        <div className="news-content container">
          <div onClick={() => navigate(-1)} className="go-back-button">
            <FaAngleLeft className='back-icon'/> 
            <p className='back-text'>Orqaga</p>
          </div>
          <div className="error-message">
            <Empty description={false} className='empty-box' />
            <p className='error-text'>Ma'lumot topilmadi.</p>
            <button onClick={() => navigate('/news')} className="back-button">
                Ortga qaytish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="news-container">
      <div className="news-content container">
        <div onClick={() => navigate(-1)} className="go-back-button">
          <FaAngleLeft className='back-icon'/> 
          <p className='back-text'>Orqaga</p>
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
          <div>
            <div className="date-badge">{formatDate(item?.createdAt)}</div>
            <h1 className="news-title">{item?.title}</h1>
            <p className="news-description">{item?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;