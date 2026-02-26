import { useState, useEffect } from 'react';
import { Popover, Radio, Slider, Button, Tooltip } from 'antd';
import { ReloadOutlined, CloseOutlined } from '@ant-design/icons';
import {  IoGlassesOutline } from 'react-icons/io5';
import './appearance-setting.css';
import { useTranslation } from 'react-i18next';

const AppearanceSettings = () => {
  const { t } = useTranslation('layout', { keyPrefix: 'appearance_settings' });
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
        <span>{t('title')}</span>
        <CloseOutlined className="close-icon" onClick={() => setVisible(false)} />
      </div>
      
      <div className="settings-section">
        <Radio.Group onChange={(e) => setIsGrayscale(e.target.value)} value={isGrayscale}>
          <div className="radio-item">
            <Radio value={false}>{t('normal_version')}</Radio>
          </div>
          <div className="radio-item">
            <Radio value={true}>{t('grayscale_version')}</Radio>
          </div>
        </Radio.Group>
      </div>

      <div className="settings-section">
        <p className="section-label">{t('font_size')}</p>
        <div className="slider-wrapper">
          <span className="a-small">A</span>
          <Slider 
            min={-3} max={3} 
            value={fontModifier} 
            onChange={setFontModifier}
            tooltip={{ open: false }}
          />
          <span className="a-large">A</span>
        </div>
      </div>

      <Button className="reset-btn" icon={<ReloadOutlined />} onClick={resetSettings} block>
        {t('reset')}
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
        <Tooltip title={t('tooltip')} placement="bottom">
          <IoGlassesOutline className='glass-icon' />
        </Tooltip>
    </Popover>
  );
};

export default AppearanceSettings;