import React, { useState } from 'react';
import { Collapse} from 'antd';
import './faq-accordion.css';

const { Panel } = Collapse;

interface AccordionData {
  key: string;
  title: string;
  content: string;
}

const data: AccordionData[] = [
  {
    key: '1',
    title: 'Personalized Financial Insights',
    content: 'Receive tailored insights and recommendations based on your spending habits, helping you make smarter financial decisions.',
  },
  {
    key: '2',
    title: 'Bill Payment Reminders',
    content: 'Never miss a due date again with automated alerts and scheduling for all your recurring bills.',
  },
  {
    key: '3',
    title: 'Peer-to-Peer Transfers',
    content: 'Send and receive money instantly with friends and family using just a phone number or email address.',
  },
];

const FAQAccordion: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>(['1']);

  const onChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  return (
    <div className="custom-antd-wrapper">
      <Collapse
        accordion
        activeKey={activeKey}
        onChange={onChange}
        expandIconPosition="end"
        ghost
        expandIcon={({ isActive }) => (
          <span className={`custom-chevron ${isActive ? 'up' : 'down'}`} />
        )}
      >
        {data.map((item) => (
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