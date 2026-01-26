import { Grid, List } from "antd";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useMemo, useState } from "react";
import './file-card-list.css';

const { useBreakpoint } = Grid;

interface BaseItem {
    id: string | number;
    createdAt: Date | string;
}

interface FileCardListProps<T extends BaseItem> {
    title: string;
    dataSource: T[];
    renderItem: (item: T) => React.ReactNode;
    allLabel?: string; 
}

const FileCardList = <T extends BaseItem>({ 
    title, 
    dataSource, 
    renderItem, 
    allLabel = "Barchasi" 
}: FileCardListProps<T>) => {
    const screens = useBreakpoint();
    const dynamicPageSize = screens.xl ? 8 : (screens.md ? 6 : 4);
    const [selectedYear, setSelectedYear] = useState<string>('all');

    const filterOptions = useMemo(() => {
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

                <List
                    key={selectedYear}
                    grid={{ gutter: 10, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
                    pagination={{
                        pageSize: dynamicPageSize,
                        responsive: true,
                        position: 'bottom',
                        align: 'center',
                        itemRender: itemRender,
                        className: 'custom-pagination',
                    }}
                    dataSource={filteredData}
                    renderItem={(item, index) => (
                        <List.Item
                            className="animate-item-up" 
                            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                            {renderItem(item)}
                        </List.Item>
                    )}
                />
            </div>
        </section>
    );
}

export default FileCardList;