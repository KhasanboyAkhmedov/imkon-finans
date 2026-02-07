import React, { useState } from 'react';
import { Tabs } from 'antd';
import ApplicationForm from './application-form';
import CreditCalculator from './credit-calculator';
import './loanComponent.css';


const LoanComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('application');
    const items = [
        { key: 'application', label: 'Ariza', children: <ApplicationForm /> },
        { key: 'credit-calculator', label: 'Kredit kalkulyatori', children: <CreditCalculator onSwitch={() => setActiveTab('application')} /> },
    ];

  return (
    <section className='loan container'>
        <div className="loan-wrapper ">
            <div className="loan-header">
                <h2 className='credit-title'>Kreditga ariza bering</h2>
                <p className='credit-corporate-description'>
                    Основное направление деятельности — выдача микрозаймов физическим лицам
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