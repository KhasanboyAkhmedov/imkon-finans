import { useState, type ChangeEvent, type FormEvent } from 'react';
import './contactForm.css';

const ContactForm = () => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Ma'lumot yuborildi!");
    }
  };

  return (
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
          className={`submit-btn ${isFormValid ? 'active' : ''}`}
          disabled={!isFormValid}
        >
          YUBORISH
        </button>
      </form>
    </div>
  );
};

export default ContactForm;