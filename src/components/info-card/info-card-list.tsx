import React from 'react';
import { List, Grid } from 'antd';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import './info-card-list.css';

const { useBreakpoint } = Grid;

interface InfoCardListProps<T> {
  title: string;
  pageDescription?: string;
  dataSource: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  pageSize?: number;
}

const InfoCardList = <T extends { id: string | number }>({ 
  title, 
  pageDescription,
  dataSource, 
  renderItem,
  pageSize 
}: InfoCardListProps<T>) => {
  const screens = useBreakpoint();
  const defaultPageSize = screens.md ? 3 : 3;

  const itemRender = (_: unknown, type: string, originalElement: React.ReactNode) => {
    if (type === 'prev') return <HiOutlineArrowLeft className="pagi-arrow-wrapper" />;
    if (type === 'next') return <HiOutlineArrowRight className="pagi-arrow-wrapper" />;
    return originalElement;
  };

  return (
    <section className="info-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className='page-description'>{pageDescription}</p>

        <List
          dataSource={dataSource}
          pagination={{
            pageSize: pageSize || defaultPageSize,
            itemRender: itemRender,
            position: 'bottom',
            align: 'center',
            className: 'custom-pagination',
          }}
          renderItem={(item, index) => (
            <List.Item className="info-list-item-wrapper">
              {renderItem(item, index)}
            </List.Item>
          )}
        />
      </div>
    </section>
  );
};

export default InfoCardList;