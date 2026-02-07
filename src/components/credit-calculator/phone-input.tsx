import React, { useState } from 'react';
import { Form, Input } from 'antd';
import './phone-input.css';

const PhoneNumberInput: React.FC = () => {
  const [form] = Form.useForm();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (!value.startsWith('998')) value = '998' + value;
    value = value.substring(0, 12);

    let formattedValue = '+';
    if (value.length > 0) formattedValue += value.substring(0, 3);
    if (value.length > 3) formattedValue += ' ' + value.substring(3, 5);
    if (value.length > 5) formattedValue += '-' + value.substring(5, 8);
    if (value.length > 8) formattedValue += '-' + value.substring(8, 10);
    if (value.length > 10) formattedValue += '-' + value.substring(10, 12);

    form.setFieldsValue({ phone: formattedValue });

    const pattern = /^\+998 \d{2}-\d{3}-\d{2}-\d{2}$/;
    if (formattedValue.length > 5 && !pattern.test(formattedValue)) {
      setErrorMsg('Format must be +998 94-666-60-67');
    } else {
      setErrorMsg(null);
    }
  };

  return (
    <div className="phone-input-wrapper">
      <div className="custom-input-container">
        <Form form={form} layout="vertical">
          <Form.Item
            label="Telefon raqami"
            name="phone"
            initialValue="+998 "
            required
            validateStatus={errorMsg ? 'error' : ''}
          >
            <Input 
              className="custom-phone-input" 
              onChange={handlePhoneChange}
              maxLength={17} 
            />
          </Form.Item>
        </Form>
      </div>
      
      {errorMsg && <div className="outside-error-message">{errorMsg}</div>}
    </div>
  );
};

export default PhoneNumberInput;