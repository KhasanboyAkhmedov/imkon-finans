import { useEffect, useState } from 'react';
import DividendTable from "../../components/dividend-table/dividend-table";
import { message } from 'antd';
import './dividends.css';
import { useTranslation } from 'react-i18next';

const Dividends = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'file_pages' });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDividends = async () => {
      try {
        const response = await fetch('https://imkon-finans-backend.vercel.app/api/dividends/all');
        const result = await response.json();
        setData(result.data || []);
      } catch {
        message.error("Ma'lumotlarni yuklashda xatolik sahifani yangilang!");
      } finally {
        setLoading(false);
      }
    };
    fetchDividends();
  }, []);

  return (
    <section className='dividends-section'>
      <div className='container'>
        <h2 className="section-title">{t('dividends')}</h2>
        <DividendTable rawData={data} loading={loading} />
      </div>
    </section>
  );
};

export default Dividends;