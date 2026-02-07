import React, { useState, useEffect } from 'react';
import { Form, Slider, Checkbox, Col, Row, Typography, Button } from 'antd';
import CustomInput from './custom-input';
import CustomSelect from './custom-select';
import './application-form.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';

const { Text } = Typography;

const ApplicationForm: React.FC = () => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [submittable, setSubmittable] = useState(false);

  useEffect(() => {
    form.validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [values, form]);

  const formatPhone = (val: string) => {
    let v = val.replace(/\D/g, '');
    if (!v.startsWith('998')) v = '998' + v;
    v = v.substring(0, 12);
    let f = '+';
    if (v.length > 0) f += v.substring(0, 3);
    if (v.length > 3) f += ' ' + v.substring(3, 5);
    if (v.length > 5) f += '-' + v.substring(5, 8);
    if (v.length > 8) f += '-' + v.substring(8, 10);
    if (v.length > 10) f += '-' + v.substring(10, 12);
    return f;
  };

  const creditOptions = [{ label: 'Ipoteka krediti', value: 'mortgage' }, { label: 'Avtokredit', value: 'auto' }, { label: 'Mikroqarz', value: 'micro' }];
  const mdlOptions = [{ label: 'MDL', value: 'mdl' }];

  return (
    <Form form={form} layout="vertical" className="form-content">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <CustomInput
                label="F.I.O. *"
                name="name"
                form={form}
                placeholder="Ivanov Aleksey Petrovich"
                required
                rules={[
                    { required: true, message: 'Iltimos, ismingizni kiriting' },
                    { min: 4, message: 'Ism juda qisqa' }
                ]}
              />
            </Col>
            <Col xs={24} sm={12}>
              <CustomInput
                label="Telefon raqami"
                name="phone"
                form={form}
                initialValue="+998 "
                formatValue={formatPhone}
                required
              />
            </Col>
            <Col xs={24} sm={12}>
              <CustomSelect
                name="credit_type"
                form={form}
                placeholder="Kredit turini tanlang"
                options={creditOptions}
                required
              />
            </Col>
            <Col xs={24} sm={12}>
              <CustomSelect
                name="mdl"
                form={form}
                placeholder="MDL"
                options={mdlOptions}
                required
              />
            </Col>
          </Row>

        </Col>

        <Col xs={24} lg={8}>
            <div className='slider-group'>      
                <div className="slider-card">
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <TbMoneybag className='slider-icon' />
                        <div>
                            <Text type="secondary" className='slider-text'>Manga kerak</Text>
                            <div><b>{(values?.amount || 150000000).toLocaleString()} So'm</b></div>
                        </div>
                    </div>
                    <Form.Item name="amount" initialValue={150000000} noStyle>
                         <Slider min={10000000} max={300000000} step={2000000} tooltip={{ open: false }} />
                    </Form.Item>
                </div>
            </div>
            <div className='slider-group'>      
                <div className="slider-card">
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <FaCalendarAlt className='slider-icon' />
                    <div>
                        <Text type="secondary" style={{ fontSize: '12px' }}>Muddatga</Text>
                        <div><b>{values?.months || 20} oy</b></div>
                    </div>
                    </div>
                    <Form.Item name="months" initialValue={20} noStyle>
                    <Slider min={12} max={48} tooltip={{ open: false }} />
                    </Form.Item>
                </div>
            </div>
        </Col>
        <div className='submission'>
            <Form.Item 
                name="agreement" 
                valuePropName="checked" 
                rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject() }]}
                className='agreement-section'
            >
                <Checkbox>
                    <span className='agreement-text'>
                        Men sayt shartlariga roziman, maxfiylik siyosati va cookie-fayllardan foydalanish qoidalarini 
                        o'qib chiqqanman, tushunganman va rozilik bildiraman. Menga Imkon Finans kompaniyasi 
                        mening kredit tarixim haqidagi ma'lumotlarni kredit byurosidan so'rashi/yetkazishi mumkinligi 
                        haqida xabar berildi.
                    </span>
                </Checkbox>
            </Form.Item>
            <Button 
                type='primary'
                disabled={!submittable} 
                className='submit-button'
            >
                Arizani yuborish <span style={{ marginLeft: '8px' }}>→</span>
            </Button>
        </div>
      </Row>
    </Form>
  );
};

export default ApplicationForm;