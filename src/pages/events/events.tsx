import { useState, useEffect } from 'react';
import { InfoCard } from '../../components/info-card/info-card';
import InfoCardList from '../../components/info-card/info-card-list';
import type { InfoCardItem } from '../../components/info-card/info-card.types';
import InfoCardSkeleton from '../../components/info-card/info-card-skeleton';

const Events = () => {
  const [data, setData] = useState<InfoCardItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const fetchEvents = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/events/all?page=${page}&pageSize=${3}`
      );
      const result = await response.json();
      
      setData(result.data);
      setTotal(result.totalCount);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  return (
    <InfoCardList 
        title="Tadbirlar"
        pageDescription="“IMKON FINANS” mikromoliya tashkiloti aksiyadorlik jamiyati o‘n yildan buyon kichik va o‘rta biznes hamda xususiy tadbirkorlikni rivojlantirishga, shuningdek, O‘zbekiston Respublikasida tobora kengayib borayotgan mikromoliya bozorining rivojlanishiga o‘z hissasini qo‘shib kelmoqda. "
        dataSource={data}
        loading={loading}
        total={total}
        current={currentPage}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
        renderItem={(item, index) => {
          if (loading) {
            return <InfoCardSkeleton index={index} />;
          }

          return (
            <InfoCard 
              item={item}
              index={index}
              isClickable
              navigateUrl={`/events/${item._id}`}
            />
          );
        }}
    />
  );
};

export default Events;