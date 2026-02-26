import React, { useMemo } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './dividend-table.css';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

interface LanguageContent {
  year: string;
  ordinary_shares_dividend: string;
  preferred_shares_dividend: string;
  total_dividend_amount: string;
  unpaid_dividend: string;
}

interface RawDividendItem {
  _id: string;
  uzb: LanguageContent;
  rus: LanguageContent;
  eng: LanguageContent;
}

interface DividendTableProps {
  rawData: RawDividendItem[];
  loading: boolean;
}

interface DividendData {
  key: string;
  year: string;
  ordinary: string;
  privileged: string;
  totalSum: string;
  unpaid: string;
}

const DividendTable: React.FC<DividendTableProps> = ({ rawData, loading }) => {
  const { lang } = useLanguage();
  const { t } = useTranslation('pages', { keyPrefix: 'dividends_table' });

  const dataSource = useMemo(() => {
    return rawData.map((item) => {
      const content = item[lang as keyof Omit<RawDividendItem, '_id'>] || item.uzb;
      
      return {
        key: item._id,
        year: content.year,
        ordinary: content.ordinary_shares_dividend,
        privileged: content.preferred_shares_dividend,
        totalSum: content.total_dividend_amount,
        unpaid: content.unpaid_dividend || '0',
      };
    });
  }, [rawData, lang]);

  const columns: ColumnsType<DividendData> = [
    {
      title: t('year'),
      dataIndex: 'year',
      key: 'year',
      className: 'col-year',
      width: '20%',
    },
    {
      title: t('ordinary'),
      dataIndex: 'ordinary',
      key: 'ordinary',
      width: '20%',
    },
    {
      title: t('privileged'),
      dataIndex: 'privileged',
      key: 'privileged',
      width: '20%',
    },
    {
      title: t('total_sum'),
      dataIndex: 'totalSum',
      key: 'totalSum',
      width: '20%',
    },
    {
      title: t('unpaid'),
      dataIndex: 'unpaid',
      key: 'unpaid',
      width: '20%',
    },
  ];

  return (
    <div className="dividend-table-container">
      <Table 
        columns={columns} 
        dataSource={dataSource} 
        loading={loading}
        pagination={false} 
        className="custom-dividend-table"
        scroll={{ x: 800 }}
      />
    </div>
  );
};

export default DividendTable;