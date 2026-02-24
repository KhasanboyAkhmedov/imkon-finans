import { useEffect, useState } from "react";
import FileCardList from "../../components/file-card-list/file-card-list"
import NewsCard from "../../components/news/newsCard"
import NewsCardSkeleton from "../../components/news/newsCardSkeleton";
import { Grid } from "antd";
import type { NewsItem } from "../../components/news/newsData";

const { useBreakpoint } = Grid;

const News = () => {
  const screens = useBreakpoint();
  const dynamicPageSize = screens.xl ? 8 : (screens.md ? 6 : 4);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [fileStats, setFileStats] = useState({ years: [], counts: {}, total: 0 });
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const fetchNews = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const yearQuery = selectedYear !== 'all' ? `&year=${selectedYear}` : '';

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/news/all?page=${page}&pageSize=${pageSize}&${yearQuery}`
      );
      const result = await response.json();
      
      setNews(result.data || []);
      setTotal(result.totalCount || 0);
      setFileStats(result.fileStats || { years: [], counts: {}, total: 0 });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [dynamicPageSize]);

  useEffect(() => {
    fetchNews(currentPage, dynamicPageSize);
  }, [currentPage, dynamicPageSize]);

  return (
    <FileCardList
        title={`Yangiliklar va e'lonlar`}
        dataSource={news}
        loading={loading}
        total={total}
        current={currentPage}
        pageSize={dynamicPageSize}
        fileStats={fileStats}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
        onPageChange={(page) => setCurrentPage(page)}
        renderSkeleton={() => <NewsCardSkeleton />}
        renderItem={(item) => <NewsCard item={item}/>}
    />
  )
}

export default News