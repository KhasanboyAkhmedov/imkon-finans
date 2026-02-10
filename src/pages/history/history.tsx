import { useEffect, useState } from 'react';
import { InfoCard } from '../../components/info-card/info-card';
import './history.css';
import type { InfoCardItem } from '../../components/info-card/info-card.types';
import InfoCardSkeleton from '../../components/info-card/info-card-skeleton';

const History = () => {
    const [data, setData] = useState<InfoCardItem[]>([]);
    const [loading, setLoading] = useState(false);
  
    const apiUrl = import.meta.env.VITE_API_URL;
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/chistory/all`
        );
        const result = await response.json();
        
        setData(result.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchEvents();
    }, []);

  return (
    <section className="history-section">
      <div className="container">
        <h2 className="section-title">Jamiyat tarixi</h2>
        <p className='page-description'>2020-yil sentabr oyida «IMKON FINANS mikrokredit tashkiloti» MChJ Kengashi qaroriga muvofiq «IMKON FINANS mikrokredit tashkiloti» aksiyadorlik jamiyatiga aylantirilgan.</p>

        <div className="history-items-container">
          {loading ? (
            [1, 2, 3].map((n) => (
              <div key={`skeleton-${n}`} className="info-list-item-wrapper">
                <InfoCardSkeleton index={n} />
              </div>
            ))
          ) : (
            data.map((item, index) => (
              <div key={item._id} className="info-list-item-wrapper">
                <InfoCard showDate={false} isFloating index={index} item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default History