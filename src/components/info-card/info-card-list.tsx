import React from 'react';
import { List } from 'antd';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import './info-card-list.css';

interface InfoCardListProps<T> {
  title: string;
  pageDescription?: string;
  dataSource: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  pageSize?: number;
  total?: number;
  loading?: boolean;
  current?: number;
  onPageChange?: (page: number, pageSize: number) => void;
}

const InfoCardList = <T extends { _id: string }>({ 
  title, 
  pageDescription,
  dataSource, 
  renderItem,
  pageSize = 3,
  total,
  loading,
  current,
  onPageChange 
}: InfoCardListProps<T>) => {

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
          dataSource={loading ? Array(3).fill({}) : dataSource}
          pagination={{
            current: current,
            total: total,
            pageSize: pageSize,
            onChange: onPageChange,
            itemRender: itemRender,
            position: 'bottom',
            align: 'center',
            className: 'custom-pagination',
          }}
          renderItem={(item, index) => (
            <List.Item>
              {renderItem(item, index)}
            </List.Item>
          )}
        />
      </div>
    </section>
  );
};

export default InfoCardList;