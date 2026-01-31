import { useState, useEffect } from 'react';
import { Popover, Radio, Slider, Button, Tooltip } from 'antd';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons';
import {  IoGlassesOutline } from 'react-icons/io5';
import './appearance-setting.css';

const AppearanceSettings = () => {
  const [isGrayscale, setIsGrayscale] = useState(() => localStorage.getItem('site-grayscale') === 'true');
  const [fontModifier, setFontModifier] = useState(() => Number(localStorage.getItem('site-font-modifier')) || 0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('grayscale-mode', isGrayscale);
    localStorage.setItem('site-grayscale', isGrayscale.toString());
  }, [isGrayscale]);

  useEffect(() => {
    document.documentElement.style.setProperty('--user-font-modifier', `${fontModifier}px`);
    localStorage.setItem('site-font-modifier', fontModifier.toString());
  }, [fontModifier]);

  const resetSettings = () => {
    setIsGrayscale(false);
    setFontModifier(0);
  };

  const content = (
    <div className="settings-container">
      <div className="settings-header">
        <span>Sayt ko‘rinishi</span>
        <CloseOutlined className="close-icon" onClick={() => setVisible(false)} />
      </div>
      
      <div className="settings-section">
        <Radio.Group onChange={(e) => setIsGrayscale(e.target.value)} value={isGrayscale}>
          <div className="radio-item">
            <Radio value={false}>Oddiy versiya</Radio>
          </div>
          <div className="radio-item">
            <Radio value={true}>Oq-qora versiya</Radio>
          </div>
        </Radio.Group>
      </div>

      <div className="settings-section">
        <p className="section-label">Shrift hajmi</p>
        <div className="slider-wrapper">
          <span className="a-small">A</span>
          <Slider 
            min={-4} max={4} 
            value={fontModifier} 
            onChange={setFontModifier}
            tooltip={{ open: false }}
          />
          <span className="a-large">A</span>
        </div>
      </div>

      <Button className="reset-btn" icon={<ReloadOutlined />} onClick={resetSettings} block>
        Sozlamalarni tiklash
      </Button>
    </div>
  );

  return (
    <Popover 
        content={content} 
        trigger="click" 
        open={visible}
        onOpenChange={setVisible}
        placement="bottom"
        arrow={false} 
        overlayClassName="accessibility-popover"
    >
        <Tooltip title="Maxsus imkoniyatlar" placement="bottom">
        <IoGlassesOutline className='glass-icon' />
        </Tooltip>
    </Popover>
  );
};

export default AppearanceSettings;