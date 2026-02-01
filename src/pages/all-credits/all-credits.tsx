import React from 'react';
import { List, Grid } from 'antd';
import { CreditCard } from '../../components/credit-card/creditCard';
import { credits } from './all-credits.data';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import './all-credits.css';

const { useBreakpoint } = Grid;

const AllCredits = () => {
    const screens = useBreakpoint();
    
    const dynamicPageSize = screens.xl ? 12 : (screens.md ? 8 : 6);

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
                    grid={{
                        gutter: 20, 
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 3, 
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
                    dataSource={credits}
                    renderItem={(item) => (
                        <List.Item className="equal-height-item">
                            <CreditCard item={item} />
                        </List.Item>
                    )}
                />
            </div>
        </section>
    );
}

export default AllCredits;