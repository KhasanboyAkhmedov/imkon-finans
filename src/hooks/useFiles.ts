import { useState, useEffect, useCallback } from 'react';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useFiles = (fileType: string) => {
  const screens = useBreakpoint();
  const dynamicPageSize = screens.xl ? 8 : (screens.md ? 6 : 4);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [fileStats, setFileStats] = useState({ years: [], counts: {}, total: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const fetchFiles = useCallback(async (page: number, year: string) => {
    setLoading(true);
    try {
      const yearQuery = year !== 'all' ? `&yearQuery=${year}` : '';
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/files/all?page=${page}&pageSize=${dynamicPageSize}&type=${fileType}&${yearQuery}`
      );
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const result = await response.json();
      
      setData(result.data || []);
      setTotal(result.totalCount || 0);
      setFileStats(result.fileStats || { years: [], counts: {}, total: 0 });
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [fileType, dynamicPageSize]);

  useEffect(() => {
    fetchFiles(currentPage, selectedYear);
  }, [currentPage, selectedYear, fetchFiles]);

  useEffect(() => {
    setCurrentPage(1);
  }, [fileType]);

  return {
    data,
    loading,
    total,
    fileStats,
    currentPage,
    setCurrentPage,
    pageSize: dynamicPageSize,
    selectedYear,
    setSelectedYear,
    refresh: () => fetchFiles(currentPage, selectedYear),
  };
};