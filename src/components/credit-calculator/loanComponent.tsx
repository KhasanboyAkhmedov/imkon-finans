import React, { useState } from 'react';
import { Tabs } from 'antd';
import ApplicationForm from './application-form';
import CreditCalculator from './credit-calculator';
import './loanComponent.css';
import { useTranslation } from 'react-i18next';


const LoanComponent: React.FC = () => {
    const { t } = useTranslation('main', { keyPrefix: 'credit_application.loan_section' });

    const [activeTab, setActiveTab] = useState('application');
    const items = [
        { key: 'application', label: t('tabs.application'), children: <ApplicationForm /> },
        { key: 'credit-calculator', label: t('tabs.calculator'), children: <CreditCalculator onSwitch={() => setActiveTab('application')} /> },
    ];

  return (
    <section className='loan container'>
        <div className="loan-wrapper ">
            <div className="loan-header">
                <h2 className='credit-title'>{t('title')}</h2>
                <p className='credit-corporate-description'>
                    {t('description')}
                </p>
            </div>

            <Tabs 
                activeKey={activeTab}
                onChange={(key) => setActiveTab(key)} 
                items={items} 
                className="custom-tabs" 
            />
        </div>
    </section>
  );
};

export default LoanComponent;