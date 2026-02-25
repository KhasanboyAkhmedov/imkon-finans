import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Empty, message } from 'antd';
import { useLanguage } from '../../hooks/useLanguage';
import { DynamicIcon } from '../../commons/dynamic-icon';
import LoanModal from '../../components/credit-calculator/loan-modal';
import './credit-details.css';
import type { Credit } from '../../components/our-products/productsData';
import { FaAngleLeft } from 'react-icons/fa6';
import CreditDetailSkeleton from '../../components/credit-detail-skeleton/credit-detail-skeleton';

const CreditDetail: React.FC = () => {
  const { creditName } = useParams<{ creditName: string }>();
  const { lang } = useLanguage();
  const navigate = useNavigate();
  
  const [data, setData] = useState<Credit | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('application');

  useEffect(() => {
    const fetchCredit = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/credits/one/${creditName}`
        );
        if (!response.ok) throw new Error('Data not found');
        const result = await response.json();
        
        setData(result);
        if (result?.details?.length > 0) {
          setActiveTabId(result.details[0]._id);
        }
      } catch {
        message.error("Ma'lumotni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    if (creditName) fetchCredit();
  }, [creditName]);

  const showModal = (tabKey: string) => {
    setActiveModalTab(tabKey);
    setIsModalOpen(true);
  };

  const handleBack = () => navigate("/credits");

  if (loading) return <CreditDetailSkeleton />;

  if (!data) {
    return (
      <section className='detail-container'>
        <div className="container">
            <div onClick={handleBack} className="go-back-button" style={{ cursor: 'pointer' }}>
                <FaAngleLeft className='back-icon'/> 
                <p className='back-text'>Orqaga</p>
            </div>
            <div className="error-message">
                <Empty description={false} className='empty-box' />
                <p className='error-text'>Ma'lumot topilmadi.</p>
                <button onClick={handleBack} className="back-button">Ortga qaytish</button>
            </div>
        </div>
      </section>
    );
  }

  const activeTab = data?.details?.find((t) => t._id === activeTabId);

  return (
    <section className="credit-detail-section">
      <div className="container">
        <div className="detail-header">
          <div className="detail-heading">
            <div className="detail-icon-box">
              <DynamicIcon 
                lib={data?.icon?.lib ?? 'fa'} 
                name={data?.icon?.name ?? 'FaRegQuestionCircle'} 
                className="detail-main-icon" 
              />
            </div>
            <h1 className="detail-page-title">{data?.title?.[lang] ?? ''}</h1>
          </div>
          <button className="application-button" onClick={() => showModal('application')}>
            Ariza Qoldirish <HiOutlineArrowRight className="application-button-icon" />
          </button>
        </div>

        <div className="detail-main-layout">
          <div className="detail-tabs-list">
            {data?.details?.map((tab) => (
              <button
                key={tab._id}
                className={`detail-tab-item ${activeTabId === tab._id ? 'active' : ''}`}
                onClick={() => setActiveTabId(tab._id)}
              >
                {tab?.label?.[lang] ?? ''}
              </button>
            ))}
          </div>

          <div className="detail-display-card">
            <h2 className="display-card-header">{activeTab?.content?.title?.[lang] ?? ''}</h2>
            
            <div className="display-card-body">
              {activeTab?.content?.min?.[lang] ? (
                <div className="display-range-wrapper">
                  <div className="range-block">
                    <span className="range-num">{activeTab.content.min[lang]}</span>
                    <span className="range-label">{activeTab.content.unitMin?.[lang] ?? ''}</span>
                  </div>
                  <HiOutlineArrowRight className="range-arrow-icon" />
                  <div className="range-block">
                    <span className="range-num">{activeTab?.content.max?.[lang] ?? ''}</span>
                    <span className="range-label">{activeTab.content.unitMax?.[lang] ?? ''}</span>
                  </div>
                </div>
              ) : (
                <p className={`display-text ${activeTab?.content?.isLargeText ? 'bold-large' : ''}`}>
                  {activeTab?.content?.description?.[lang] ?? ''}
                </p>
              )}
            </div>

            <p className="display-footer-info">{activeTab?.content?.footer?.[lang] ?? ''}</p>
            
            <DynamicIcon 
                lib={data?.icon?.lib ?? 'fa'} 
                name={data?.icon?.name ?? 'FaRegQuestionCircle'} 
                className="detail-watermark" 
            />
          </div>
        </div>

        <button className="application-button mobile-only" onClick={() => showModal('application')}>
          Ariza qoldirish <HiOutlineArrowRight className="application-button-icon" />
        </button>
      </div>

      <LoanModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        activeTab={activeModalTab} 
        setActiveTab={setActiveModalTab} 
      />
    </section>
  );
};

export default CreditDetail;