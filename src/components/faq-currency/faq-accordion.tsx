import React, { useState } from 'react';
import { Collapse} from 'antd';
import './faq-accordion.css';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;

interface AccordionData {
  key: string;
  title: string;
  content: string;
}

const FAQAccordion: React.FC = () => {
  const { t } = useTranslation('main', { keyPrefix: 'faq' });
  const [activeKey, setActiveKey] = useState<string | string[]>(['1']);
  const questions = t('questions', { returnObjects: true }) as AccordionData[];

  const onChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  return (
    <div className="custom-antd-wrapper">
      <Collapse
        accordion
        activeKey={activeKey}
        onChange={onChange}
        expandIconPlacement="end"
        ghost
        expandIcon={({ isActive }) => (
          <span className={`custom-chevron ${isActive ? 'up' : 'down'}`} />
        )}
      >
        {questions.map((item) => (
          <Panel
            header={
              <div className="custom-header">
                <span className="index-circle">{item.key}</span>
                <span className="header-text">{item.title}</span>
              </div>
            }
            key={item.key}
            className="custom-panel"
          >
            <div className="custom-content">{item.content}</div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQAccordion;