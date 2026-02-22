import { Empty, List } from "antd";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useMemo, useState } from "react";
import './file-card-list.css';
import { useNavigate } from "react-router-dom";

interface BaseItem {
    _id: string;
    createdAt: string;
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
    allLabel?: string; 
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
    allLabel = "Barchasi",
}: FileCardListProps<T>) => {
    const navigate = useNavigate();
    const [selectedYear, setSelectedYear] = useState<string>('all');

    const filterOptions = useMemo(() => {
        if (!dataSource || dataSource.length === 0) {
            return { years: [], counts: {}, total: 0 };
        }
        const counts: Record<string, number> = {};
        dataSource.forEach(item => {
            const year = new Date(item.createdAt).getFullYear().toString();
            counts[year] = (counts[year] || 0) + 1;
        });
        const years = Object.keys(counts).sort((a, b) => Number(b) - Number(a));
        return { years, counts, total: dataSource.length };
    }, [dataSource]);

    const filteredData = useMemo(() => {
        if (selectedYear === 'all') return dataSource;
        return dataSource.filter(item => 
            new Date(item.createdAt).getFullYear().toString() === selectedYear
        );
    }, [selectedYear, dataSource]);
    
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
                        <p className='error-text'>Ma'lumot topilmadi.</p>
                        <button onClick={() => navigate('/')} className="back-button">
                            Ortga qaytish
                        </button>
                    </div>
                    )
                }
                {(loading || (dataSource && dataSource.length > 0)) && (
                    <div className="filter-tabs-container">
                        <div 
                            className={`filter-tab ${selectedYear === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedYear('all')}
                        >
                            {allLabel} <span className="count-badge">{filterOptions.total}</span>
                        </div>

                        {filterOptions.years.map(year => (
                            <div 
                                key={year}
                                className={`filter-tab ${selectedYear === year ? 'active' : ''}`}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year} <span className="count-badge">{filterOptions.counts[year]}</span>
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
                        ? Array.from({ length: pageSize }) 
                        : filteredData
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