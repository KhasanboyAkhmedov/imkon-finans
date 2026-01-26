import { Grid, List } from "antd"
import FileCard from "../../components/file-card/file-card"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { BusinessPlansData } from "./business-plans.data";
import './business-plans.css';
import { useMemo, useState } from "react";

const { useBreakpoint } = Grid;

const BusinessPlans = () => {
    const screens = useBreakpoint();
    const dynamicPageSize = screens.xl ? 8 : (screens.md ? 6 : 4);
    const [selectedYear, setSelectedYear] = useState<string>('all');

    const filterOptions = useMemo(() => {
        const counts: Record<string, number> = {};
        BusinessPlansData.forEach(item => {
            const year = new Date(item.createdAt).getFullYear().toString();
            counts[year] = (counts[year] || 0) + 1;
        });
        const years = Object.keys(counts).sort((a, b) => Number(b) - Number(a));
        return { years, counts, total: BusinessPlansData.length };
    }, []);

    const filteredData = useMemo(() => {
        if (selectedYear === 'all') return BusinessPlansData;
        return BusinessPlansData.filter(item => 
            new Date(item.createdAt).getFullYear().toString() === selectedYear
        );
    }, [selectedYear]);

    const itemRender = (_: unknown, type: "prev" | "page" | "next" | "jump-prev" | "jump-next", originalElement: React.ReactNode) => {
        if (type === 'prev') {
            return <HiOutlineArrowLeft  className="pagi-arrow-wrapper" /> ;
        }
        if (type === 'next') {
            return <HiOutlineArrowRight  className="pagi-arrow-wrapper" />;
        }
        return originalElement;
    };

    return (
            <section className='business-plans-section'>
                <div className='container'>
                    <h2 className="section-title">"Imkon Finans" AJning biznes rejalari</h2>
                    <div className="filter-tabs-container">
                        <div className="filter-tabs-container">
                            <div 
                                className={`filter-tab ${selectedYear === 'all' ? 'active' : ''}`}
                                onClick={() => setSelectedYear('all')}
                            >
                                Barchasi <span className="count-badge">{filterOptions.total}</span>
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
                    </div>
                    <List
                        grid={{
                            gutter: 10,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 4,
                            xl: 4,
                            xxl: 4,
                        }}
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
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <FileCard data={item} />
                            </List.Item>
                        )}
                    />
                </div>

            </section>
        )
}

export default BusinessPlans