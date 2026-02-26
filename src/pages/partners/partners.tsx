import { Grid, List } from "antd";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useEffect, useState, useMemo } from "react";
import './partners.css';
import { useTranslation } from "react-i18next";

const { useBreakpoint } = Grid;

interface PartnerItem {
    _id: string;
    imageUrl: string;
}

const Partners = () => {
    const { t } = useTranslation('main', { keyPrefix: 'partners' });
    const screens = useBreakpoint();
    const dynamicPageSize = (screens.md || screens.xl) ? 8 : 4;
    
    const [partners, setPartners] = useState<PartnerItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

    const fetchPartners = async (page: number) => {
        setLoading(true);
        setLoadedImages({}); 
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/partners/all?page=${page}&pageSize=${dynamicPageSize}`
            );
            const result = await response.json();
            if (result.data) {
                setPartners(result.data);
                setTotal(result.totalCount);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPartners(currentPage);
    }, [currentPage, dynamicPageSize]);

    const displayData = useMemo(() => {
        if (loading) {
            return Array.from({ length: dynamicPageSize }).map((_, i) => ({
                _id: `skeleton-${i}`,
                imageUrl: ''
            }));
        }
        return partners;
    }, [loading, partners, dynamicPageSize]);

    const itemRender = (_: unknown, type: string, originalElement: React.ReactNode) => {
        if (type === 'prev') return <HiOutlineArrowLeft className="pagi-arrow-wrapper" />;
        if (type === 'next') return <HiOutlineArrowRight className="pagi-arrow-wrapper" />;
        return originalElement;
    };

    return (
        <section className='partners-section'>
            <div className='container'>
                <h2 className="partners-section-title">{t('title')}</h2>
                <p className="section-description">{t('description')}</p>
                
                <List
                    grid={{
                        gutter: [
                            { xs: 10, sm: 16, md: 20, xl: 32, xxl: 40 }, 
                            { xs: 10, sm: 16, md: 20, xl: 32, xxl: 40 }
                        ],
                        xs: 2,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 4,
                        xxl: 4,
                    }}
                    pagination={{
                        current: currentPage,
                        pageSize: dynamicPageSize,
                        total: total,
                        onChange: (page) => setCurrentPage(page),
                        responsive: true,
                        position: 'bottom',
                        align: 'center',
                        itemRender: itemRender,
                        className: 'custom-pagination',
                    }}
                    dataSource={displayData}
                    renderItem={(item) => {
                        const isCurrentlyLoading = loading || !loadedImages[item._id];

                        return (
                            <List.Item>
                                <div className='partner-wrapper'>
                                    {isCurrentlyLoading && <div className="partners-skeleton" />}
                                    
                                    {!loading && item.imageUrl && (
                                        <img 
                                            className={`partner-image ${loadedImages ? 'opacity-100' : 'opacity-0'}`} 
                                            onLoad={() => setLoadedImages(prev => ({ ...prev, [item._id]: true }))}
                                            src={item.imageUrl}
                                            alt="Partner Logo" 
                                        />
                                    )}
                                </div>
                            </List.Item>
                        );
                    }}
                />
            </div>
        </section>
    );
}

export default Partners;