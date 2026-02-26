import React, { useState } from 'react';
import { Collapse } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import {
  servicesData,
  ServiceContentType,
} from '../../pages/our-services/our-services.data';

import type {
  ServiceList,
  ServiceAccordion,
  ServiceText,
} from '../../pages/our-services/our-services.data';
import './ourServicesTab.css';
import { BiCheckDouble } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;

const ListRenderer: React.FC<{ data: ServiceList }> = ({ data }) => (
  <div>
    <h3 className="services-title">{data.title}</h3>
    <div className="service-list-container">
      {data.items.map((item, index) => (
        <div key={index} className="service-list-item">
          <BiCheckDouble className="service-check-icon" />
          <span className="service-list-text">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const AccordionRenderer: React.FC<{ data: ServiceAccordion }> = ({ data }) => (
  <div>
    <h3 className="services-title">{data.title}</h3>
    <Collapse
      ghost
      expandIconPosition="end"
      defaultActiveKey={['q1']}
      className="our-services-custom-collapse"
      expandIcon={({ isActive }) => (
        <span className={`custom-chevron ${isActive ? 'up' : 'down'}`} />
      )}
    >
      {data.items.map((item, index) => (
        <Panel
          key={item.id}
          header={
            <div className="service-accordion-header">
              <span className="accordion-number">{index + 1}</span>
              <span>{item.question}</span>
            </div>
          }
        >
          <p>{item.answer}</p>
        </Panel>
      ))}
    </Collapse>

    {data.footerAlert && (
      <div className="service-footer-alert">
        <InfoCircleOutlined className="alert-icon" />
        <span className="alert-text">{data.footerAlert}</span>
      </div>
    )}
  </div>
);

const TextRenderer: React.FC<{ data: ServiceText }> = ({ data }) => (
  <div>
    <h3 className="services-title">{data.title}</h3>
    <p className="service-text-content">{data.content}</p>
  </div>
);


const OurServicesTab: React.FC = () => {
  const { t } = useTranslation('pages', { keyPrefix: 'services.tabs' });
  const [activeTabId, setActiveTabId] = useState<string>(servicesData[0].id);

  const activeService =
    servicesData.find((s) => s.id === activeTabId) || servicesData[0];
  
  const localizedData = t(activeTabId, { returnObjects: true }) as any;

  const finalData = activeService.type === ServiceContentType.Accordion 
    ? {
        ...localizedData,
        items: Object.keys(localizedData)
          .filter(key => key.startsWith('q'))
          .map(key => ({
            id: key,
            question: localizedData[key].q,
            answer: localizedData[key].a
          }))
      }
    : localizedData;


  return (
    <div className="services-container">
      <div className="services-tabs">
        {servicesData.map((service) => (
          <button
            key={service.id}
            className={`services-tab-btn ${
              activeTabId === service.id ? 'active' : ''
            }`}
            onClick={() => setActiveTabId(service.id)}
          >
            {t(`${service.id}.title`)}
          </button>
        ))}
      </div>
        
      <div className="services-content-card">
        {activeService.type === ServiceContentType.List && <ListRenderer data={finalData} />}
        {activeService.type === ServiceContentType.Accordion && <AccordionRenderer data={finalData} />}
        {activeService.type === ServiceContentType.Text && <TextRenderer data={finalData} />}
      </div>
    </div>
  );
};

export default OurServicesTab;