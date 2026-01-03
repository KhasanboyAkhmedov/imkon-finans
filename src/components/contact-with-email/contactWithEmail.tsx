import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import './contactWithEmail.css';

const ContactWithEmail: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted email:', email);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
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
                aria-label="Email address"
                />
                <button type="submit" className="form-button">
                YUBORISH
                </button>
            </form>
        </div>
    </div>
  );
};

export default ContactWithEmail;