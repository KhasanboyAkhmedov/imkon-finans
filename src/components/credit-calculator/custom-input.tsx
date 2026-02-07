import React, { useState } from 'react';
import { Form, Input, type FormInstance } from 'antd';
import './custom-input.css';
import type { Rule } from 'antd/es/form';

interface CustomInputProps {
  label: string;
  name: string;
  form: FormInstance;
  initialValue?: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  formatValue?: (value: string) => string;
  validate?: (value: string) => string;
  rules?: Rule[];
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  form,
  initialValue = '',
  placeholder = '',
  required = false,
  maxLength,
  formatValue,
  validate,
  rules = []
}) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    
    const processedValue = formatValue ? formatValue(rawValue) : rawValue;
    
    form.setFieldsValue({ [name]: processedValue });

    if (validate) {
      setErrorMsg(validate(processedValue));
    }
  };

  return (
    <div className={`custom-field-wrapper ${errorMsg ? 'has-error' : ''}`}>
      <div className="custom-input-container">
        <Form.Item
          label={label}
          name={name}
          initialValue={initialValue}
          required={required}
          validateStatus={errorMsg ? 'error' : ''}
          rules={[...rules, { required, message: `${label} kiritilishi shart` }]}
        >
          <Input 
            className="custom-inner-input" 
            onChange={handleChange}
            maxLength={maxLength}
            placeholder={placeholder}
          />
        </Form.Item>
      </div>
      
      {errorMsg && <div className="outside-error-message">{errorMsg}</div>}
    </div>
  );
};

export default CustomInput;