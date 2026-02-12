import { useState, type ChangeEvent, type FormEvent } from 'react';
import './contactForm.css';
import { message } from 'antd';

const ContactForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

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

  return (
    <>
      {contextHolder}
      <div className="contacts-form-container">
        <form className="contacts-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>F.I.Sh. *</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Familiya, ism, sharif"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail manzilingiz"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Telefon *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Telefon raqamingiz"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Xabar</label>
            <textarea
              name="message"
              placeholder="Xabaringiz..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isFormValid && !loading ? 'active' : ''}`}
            disabled={!isFormValid || loading}
          >
            {loading ? "YUBORILMOQDA..." : "YUBORISH"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;