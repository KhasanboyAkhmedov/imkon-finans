import React from 'react';
import { Form, Select, type FormInstance } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './custom-select.css';

interface OptionType {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  label?: string;
  name: string;
  form: FormInstance;
  placeholder?: string;
  options: OptionType[];
  required?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  placeholder,
  options,
  required = false,
  loading = false,
  disabled = false,
}) => {
  return (
    <div className="unique-select-scope">
        <Form.Item
            label={label}
            name={name}
            required={required}
        >
            <Select
                size='large'
                className="custom-inner-select"
                placeholder={placeholder}
                variant="borderless"
                options={options}
                loading={loading}
                disabled={disabled || loading}
                popupMatchSelectWidth={true}
                popupClassName="unique-select-dropdown-scope"
                suffixIcon={<DownOutlined className="custom-select-icon" />}
            />
        </Form.Item>
    </div>
  );
};

export default CustomSelect;