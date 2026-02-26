import { useState, type ChangeEvent, type FormEvent } from 'react';
import './contactForm.css';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const { t } = useTranslation('pages', { keyPrefix: 'contacts' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.fullName.trim() !== '' && formData.phone.trim() !== '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        messageApi.success(t('success'));
      } else {
        messageApi.error(t('server_error'));
      }
    } catch {
      messageApi.error(t('server_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="contacts-form-container">
        <form className="contacts-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>{t('form.label_name')}</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder={t('form.placeholder_name')}
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>{t('form.label_email')}</label>
            <input
              type="email"
              name="email"
              placeholder={t('form.placeholder_email')}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>{t('form.label_phone')}</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder={t('form.placeholder_phone')}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>{t('form.label_message')}</label>
            <textarea
              name="message"
              placeholder={t('form.placeholder_message')}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isFormValid && !loading ? 'active' : ''}`}
            disabled={!isFormValid || loading}
          >
            {loading ? t('form.submitting') : t('form.submit')}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;