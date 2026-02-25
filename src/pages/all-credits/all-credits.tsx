import React, { useCallback, useEffect, useState } from 'react';
import { List, Grid, message } from 'antd';
import { CreditCard } from '../../components/credit-card/creditCard';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import './all-credits.css';
import { CreditCardSkeleton } from '../../components/credit-card/credit-card-skeleton';
import type { Credit } from '../../components/our-products/productsData';

const { useBreakpoint } = Grid;

const AllCredits = () => {
    const screens = useBreakpoint();
    const dynamicPageSize = screens.xl ? 8 : (screens.md ? 6 : 4);
    const [data, setData] = useState<Credit[]>([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchFiles = useCallback(async (page: number,) => {
        setLoading(true);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/credits/all?page=${page}&pageSize=${dynamicPageSize}`
            );
            
            if (!response.ok) throw new Error('Network response was not ok');
            
            const result = await response.json();
            
            setData(result.data || []);
            setTotal(result.totalCount || 0);
        } catch {
            message.error("Ma'lumotni yuklashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
        } finally {
            setLoading(false);
        }
    }, [ dynamicPageSize]);

    useEffect(() => {
        fetchFiles(currentPage);
    }, [currentPage, fetchFiles]);

    const itemRender = (_: unknown, type: "prev" | "page" | "next" | "jump-prev" | "jump-next", originalElement: React.ReactNode) => {
        if (type === 'prev') {
            return <HiOutlineArrowLeft className="pagi-arrow-wrapper" />;
        }
        if (type === 'next') {
            return <HiOutlineArrowRight className="pagi-arrow-wrapper" />;
        }
        return originalElement;
    };

    return (
        <section className="all-credits-section">
            <div className='container'>
                <h2 className="section-title">Barcha kreditlar</h2>
                
                <List
                    key='all-credits'
                    grid={{
                        gutter: 20, 
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 3, 
                        xxl: 4,
                    }}
                    pagination={ loading || data.length === 0 ? false : {
                        current: currentPage,
                        total: total,
                        pageSize: dynamicPageSize,
                        onChange: (page) => setCurrentPage(page),
                        responsive: true,
                        position: 'bottom',
                        align: 'center',
                        itemRender: itemRender,
                        className: 'custom-pagination',
                    }}
                    locale={{ emptyText: <></> }}
                    dataSource={loading 
                        ? Array.from({ length: 3 }).map((_, i) => ({ _id: `skeleton-${i}` } as Credit))
                        : data
                    }
                    renderItem={(item, index) => (
                        <List.Item 
                            key={loading ? `skeleton-${item._id}` : (item as Credit)._id}
                            className="equal-height-item"
                        >
                            {loading
                                ? <CreditCardSkeleton key={index} />
                                : <CreditCard item={item} key={item._id} />
                            }
                        </List.Item>
                    )}
                />
            </div>
        </section>
    );
}

export default AllCredits;