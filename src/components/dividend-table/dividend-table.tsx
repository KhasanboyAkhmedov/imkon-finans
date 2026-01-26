import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './dividend-table.css';

interface DividendData {
  key: string;
  year: string;
  ordinary: string;
  privileged: string;
  totalSum: string;
  unpaid: string;
}

const DividendTable: React.FC = () => {
  const columns: ColumnsType<DividendData> = [
    {
      title: 'Yil',
      dataIndex: 'year',
      key: 'year',
      className: 'col-year',
      width: '20%',
    },
    {
      title: 'Oddiy aksiyalar uchun',
      dataIndex: 'ordinary',
      key: 'ordinary',
      width: '20%',
    },
    {
      title: 'Imtiyozli aksiyalar uchun',
      dataIndex: 'privileged',
      key: 'privileged',
      width: '20%',
    },
    {
      title: "Jami dividend to'lovi summasi (mln. so'n hisobida)",
      dataIndex: 'totalSum',
      key: 'totalSum',
      width: '20%',
    },
    {
      title: "To'lanmagan dividendlar (mln. so'm hisobida)",
      dataIndex: 'unpaid',
      key: 'unpaid',
      width: '20%',
    },
  ];

  const data: DividendData[] = [
    { key: '1', year: '2025 yil', ordinary: '0% | 0 so‘m', privileged: '30% | 1.5 so‘m', totalSum: '6060.825', unpaid: '0' },
    { key: '2', year: '2024 yil', ordinary: '0% | 0 so‘m', privileged: '30% | 1.5 so‘m', totalSum: '1010.14', unpaid: '0' },
    { key: '3', year: '2023 yil', ordinary: '0% | 0 so‘m', privileged: '30% | 1.5 so‘m', totalSum: '1010.14', unpaid: '0' },
    { key: '4', year: '2022 yil', ordinary: '0% | 0 so‘m', privileged: '30% | 1.5 so‘m', totalSum: '1010.14', unpaid: '0' },
  ];

  return (
    <div className="dividend-table-container">
      <h3 className="table-main-title">
        Bir dona aksiya nominal qiymatiga nisbatan hisoblangan dividendlar
      </h3>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false} 
        className="custom-dividend-table"
        scroll={{ x: 800 }}
      />
    </div>
  );
};

export default DividendTable;