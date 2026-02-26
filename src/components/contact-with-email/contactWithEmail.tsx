import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import './contactWithEmail.css';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const ContactWithEmail: React.FC = () => {
  const { t } = useTranslation('main', { keyPrefix: 'contact' });
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), 
      });

      if (response.ok) {
        setEmail('');
        messageApi.open({
          type: 'success',
          content: t('success_msg'),
        });
      } else {
        messageApi.open({
          type: 'error',
          content: t('error_msg'),
        });
      }
    } catch {
      console.error("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
      <>
        {contextHolder}
        <div className='form-container'>
          <div className="form-wrapper">
            <h2 className="form-title">{t('title')}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="email"
                className="form-input"
                placeholder={t('placeholder')}
                value={email}
                onChange={handleInputChange}
                required
                disabled={loading}
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="form-button" 
                disabled={loading || !email}
              >
                {loading ? t('submitting') : t('submit')}
              </button>
            </form>
          </div>
        </div>
      </>
  );
};

export default ContactWithEmail;