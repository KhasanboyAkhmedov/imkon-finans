import React from 'react';
import { useNavigate } from 'react-router-dom';
import './creditCard.css';
import type { Credit } from '../../pages/all-credits/all-credits.data';

export const CreditCard: React.FC<{ item: Credit }> = ({ item }) => {
    const navigate = useNavigate();
    
    const Icon = item.icon;

    return (
        <div className="product-card" onClick={() => navigate(`/credits/${item.id}`)}>
            <div className='product-card-title-wrapper'>
                <div className="product-card-iconWrapper">
                    <Icon className="product-card-icon" />
                </div>
                <h3 className="product-card-title">{item.title}</h3>
            </div>
            
            <p className="product-card-description">{item.description}</p>
            
            <button className="product-card-button">
                Xizmatni ko'rish
            </button>
            <Icon className="product-card-bgIcon" />
        </div>
    );
};