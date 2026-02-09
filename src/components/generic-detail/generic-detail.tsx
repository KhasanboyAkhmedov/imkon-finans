import { useState, useEffect, type ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa6';
import { Empty } from 'antd';
import { formatDate } from '../../commons';
import './generic-detail.css';
import type { InfoCardItem } from '../info-card/info-card.types';

interface GenericDetailProps<T> {
  resource: string;
  renderMedia?: (item: T) => ReactNode;
}

export const GenericDetail = <T extends InfoCardItem>({ 
  resource,
  renderMedia 
}: GenericDetailProps<T>) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/${resource}/one/${id}`
        );
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const result = await response.json();
        
        setItem(result.data || result); 
      } catch (error) {
        console.error("Fetch error:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, resource]);

  const handleBack = () => navigate(-1);

  if (!loading && !item) {
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
    <section className='detail-container'>
        <div className="container">
            <div onClick={handleBack} className="go-back-button">
                <FaAngleLeft className='back-icon'/> 
                <p className='back-text'>Orqaga</p>
            </div>

            {loading ? (
                <div className="skeleton-wrapper">
                <div className="skeleton skeleton-date" />
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text last" />
                </div>
            ) : (
                <article className="detail-article">
                    <div className="date-badge">{formatDate(item?.createdAt)}</div>
                    <h1 className="detail-main-title">{item?.title}</h1>
                    
                    <div className="detail-content-flow clearfix">
                        {renderMedia && <div className="detail-media-aside">{renderMedia(item!)}</div>}
                        
                        <div className="detail-text-body">
                            {item?.description}
                        </div>
                    </div>
                </article>
            )}
        </div>
    </section>
  );
};