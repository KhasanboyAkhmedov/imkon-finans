import { Empty, List } from "antd";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import './file-card-list.css';
import { useTranslation } from "react-i18next";

interface BaseItem {
    _id: string;
    createdAt: string;
}

interface FileStats {
    years: string[];
    counts: Record<string, number>;
    total: number;
}

interface FileCardListProps<T extends BaseItem> {
    title: string;
    dataSource: T[];
    loading?: boolean;
    total?: number;
    current?: number;
    pageSize?: number;
    onPageChange?: (page: number, pageSize: number) => void;
    renderItem: (item: T) => React.ReactNode;
    renderSkeleton?: () => React.ReactNode;
    fileStats?: FileStats;
    selectedYear?: string;
    onYearChange?: (year: string) => void;
}

const FileCardList = <T extends BaseItem>({ 
    title, 
    dataSource, 
    loading = false,
    total,
    current,
    pageSize = 4,
    onPageChange,
    renderItem,
    renderSkeleton,
    fileStats,
    selectedYear, 
    onYearChange,
}: FileCardListProps<T>) => {
    const navigate = useNavigate();
    const { t } = useTranslation('pages', { keyPrefix: 'file_pages' });

    const itemRender = (_: unknown, type: "prev" | "page" | "next" | "jump-prev" | "jump-next", originalElement: React.ReactNode) => {
        if (type === 'prev') return <HiOutlineArrowLeft className="pagi-arrow-wrapper" />;
        if (type === 'next') return <HiOutlineArrowRight className="pagi-arrow-wrapper" />;
        return originalElement;
    };

    return (
        <section className='unique-section'>
            <div className='container'>
                <h2 className="section-title">{title}</h2>
                {!loading && (!dataSource || dataSource.length === 0) && (
                    <div className="error-message" style={{ textAlign: 'center', padding: '40px 0' }}>
                        <Empty description={false} className='empty-box' />
                        <p className='error-text'>{t('no_data')}</p>
                        <button onClick={() => navigate('/')} className="back-button">
                            {t('back_home')}
                        </button>
                    </div>
                    )
                }
                {(loading || (fileStats && fileStats.total > 0)) && (
                    <div className="filter-tabs-container">
                        <div 
                            className={`filter-tab ${selectedYear === 'all' ? 'active' : ''}`}
                            onClick={() => onYearChange?.('all')}
                        >
                            {t('tab_all')} <span className="count-badge">{fileStats?.total || 0}</span>
                        </div>

                        {fileStats?.years.map(year => (
                            <div 
                                key={year}
                                className={`filter-tab ${selectedYear === year ? 'active' : ''}`}
                                onClick={() => onYearChange?.(year)}
                            >
                                {year} <span className="count-badge">{fileStats.counts[year]}</span>
                            </div>
                        ))}
                    </div>
                )}

                <List
                    key={selectedYear}
                    grid={{ gutter: 10, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
                    pagination={ loading || (!dataSource || dataSource.length === 0) ? false :{
                        current: current,
                        total: total,
                        pageSize: pageSize,
                        onChange: onPageChange,
                        responsive: true,
                        position: 'bottom',
                        align: 'center',
                        itemRender: itemRender,
                        className: 'custom-pagination',
                    }}
                    locale={{ emptyText: <></> }}
                    dataSource={loading 
                        ? Array.from({ length: 4 }).map((_, i) => ({ _id: `skeleton-${i}` } as T))
                        : dataSource
                    }
                    renderItem={(item, index) => (
                        <List.Item
                            key={loading ? `skeleton-${index}` : (item as T)._id}
                            className="animate-item-up" 
                            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                            {loading && renderSkeleton 
                                ? renderSkeleton() 
                                : renderItem(item as T)
                            }
                        </List.Item>
                    )}
                />
            </div>
        </section>
    );
}

export default FileCardList;