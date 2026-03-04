import React, { useState, useEffect, useMemo } from 'react';
import { Form, Slider, Col, Row, Typography, Button, message } from 'antd';
import CustomInput from './custom-input';
import CustomSelect from './custom-select';
import './application-form.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

interface FormValues {
  name: string;
  phone: string;
  credit_type: string;
  mdl: string;
  amount: number;
  months: number;
  agreement: boolean;
}

interface CreditTypeResponse {
  uzb: string[];
  eng: string[];
  rus: string[];
}

const ApplicationForm: React.FC = () => {
  const { t, i18n } = useTranslation('main', { keyPrefix: 'credit_application.application_form' });
  
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [submittable, setSubmittable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [rawCreditData, setRawCreditData] = useState<CreditTypeResponse | null>(null);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [values, form]);

  useEffect(() => {
    const fetchCreditTypes = async () => {
      setIsFetching(true);
      try {
        const response = await fetch('https://imkon-finans-backend.vercel.app/api/credits/types');
        if (!response.ok) throw new Error('Failed to fetch');
        const data: CreditTypeResponse = await response.json();
        setRawCreditData(data);
      } catch (error) {
        console.error("Credit types fetch error:", error);
        setRawCreditData(null);
      } finally {
        setIsFetching(false);
      }
    };
    fetchCreditTypes();
  }, []);

  const onFinish = async (formValues: FormValues) => {
    setLoading(true);

    const payload = {
      fullname: formValues.name,
      phone: formValues.phone.replace(/[-\s]/g, ''),
      creditType: creditOptions.find(opt => opt.value === formValues.credit_type)?.label || formValues.credit_type,
      term: formValues.months,
      amount: String(formValues.amount),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        messageApi.success(t('messages.success'));
        form.resetFields();

      } else {
        console.error(t('messages.error'));
      }
    } catch {
      console.error(t('messages.server_error'));
    } finally {
      setLoading(false);
    }
  };

  const defaultCreditOptions = useMemo(() => [
    { label: t('credit_types.mortgage'), value: 'mortgage' },
    { label: t('credit_types.auto'), value: 'auto' }, 
    { label: t('credit_types.micro'), value: 'micro' }
  ], [t]);

  const creditOptions = useMemo(() => {
    if (!rawCreditData) return defaultCreditOptions;

    const langMap: Record<string, keyof CreditTypeResponse> = {
      uzb: 'uzb',
      eng: 'eng',
      rus: 'rus'
    };

    const currentLang = langMap[i18n.language] || 'eng';
    const fetchedTypes = rawCreditData[currentLang];

    if (fetchedTypes && fetchedTypes.length > 0) {
      return fetchedTypes.map((item, index) => ({
        label: item,
        value: rawCreditData.eng[index] || item 
      }));
    }

    console.log(fetchedTypes);
    return defaultCreditOptions;
  }, [i18n.language, rawCreditData, defaultCreditOptions]);

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

  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" className="form-content" onFinish={onFinish}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <CustomInput
                  label={t('labels.name')}
                  name="name"
                  form={form}
                  placeholder={t('placeholders.name')}
                  required
                  rules={[
                      { required: true, message: t('validation.name_required') },
                      { min: 4, message: t('validation.name_short') }
                  ]}
                />
              </Col>
              <Col xs={24} sm={12}>
                <CustomInput
                  label={t('labels.phone')}
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
                  placeholder={t('placeholders.credit_type')}
                  options={creditOptions}
                  loading={isFetching}
                  disabled={isFetching}
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
                              <Text type="secondary" className='slider-text'>{t('labels.amount')}</Text>
                              <div><b>{(values?.amount || 150000000).toLocaleString()} {t('labels.currency')}</b></div>
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
                          <Text type="secondary" style={{ fontSize: '12px' }}>{t('labels.term')}</Text>
                          <div><b>{values?.months || 20} {t('labels.month')}</b></div>
                      </div>
                      </div>
                      <Form.Item name="months" initialValue={20} noStyle>
                        <Slider min={12} max={48} tooltip={{ open: false }} />
                      </Form.Item>
                  </div>
              </div>
          </Col>
          <div className='submission'>
              {/* <Form.Item 
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
              </Form.Item> */}
              <Button 
                  type='primary'
                  htmlType='submit'
                  loading={loading}
                  disabled={!submittable || loading}
                  className='submit-button'
              >
                  {t('submit')} <span style={{ marginLeft: '8px' }}>→</span>
              </Button>
          </div>
        </Row>
      </Form>
    </>
  );
};

export default ApplicationForm;