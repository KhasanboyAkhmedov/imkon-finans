import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import './contactWithEmail.css';
import { message } from 'antd';

const ContactWithEmail: React.FC = () => {
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
          content: 'Arizangiz muvaffaqiyatli yuborildi',
        });
      } else {
        messageApi.open({
          type: 'error',
          content: "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.",
        });
      }
    } catch {
      messageApi.open({
        type: 'error',
        content: "Server bilan bog'lanishda xatolik!",
      });
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
            <h2 className="form-title">Biz bilan email orqali bog'laning</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="email"
                className="form-input"
                placeholder="E - pochta kiriting"
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
                {loading ? "YUBORILMOQDA..." : "YUBORISH"}
              </button>
            </form>
          </div>
        </div>
      </>
  );
};

export default ContactWithEmail;