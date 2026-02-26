import InfoCardList from '../../components/info-card/info-card-list'
import { InfoCard } from '../../components/info-card/info-card'
import { useEffect, useState } from 'react';
import type { InfoCardItem } from '../../components/info-card/info-card.types';
import InfoCardSkeleton from '../../components/info-card/info-card-skeleton';
import { useTranslation } from 'react-i18next';

const Videos = () => {
    const [data, setData] = useState<InfoCardItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { t } = useTranslation('pages', { keyPrefix: 'videos' });
    const pageSize = 3;
  
    const fetchEvents = async (page: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/videoPosts/all?page=${page}&pageSize=${3}`
        );
        const result = await response.json();
        
        setData(result.data || []);
        setTotal(result.totalCount || 0);
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
          title={t('title')}
          pageDescription={t('description')}
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
              navigateUrl={`/videos/${item._id}`}
            />
          );
        }}
      />
    )
}

export default Videos