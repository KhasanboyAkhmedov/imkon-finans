import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Credit, SupportedLocale } from '../our-products/productsData';
import { useLanguage } from '../../hooks/useLanguage';
import { DynamicIcon } from '../../commons/dynamic-icon';

interface CreditCardProps {
  item: Credit;
  locale?: SupportedLocale;
}

export const CreditCard: React.FC<CreditCardProps> = ({ item }) => {
    const navigate = useNavigate();
    const {lang} = useLanguage();
    
    return (
        <div className="product-card" onClick={() => navigate(`/credits/${item._id}`)}>
            <div className="product-card-title-wrapper">
                <div className="product-card-iconWrapper">
                    <DynamicIcon 
                        lib={item.icon.lib} 
                        name={item.icon.name} 
                        className="product-card-icon" 
                    />
                </div>
                <h3 className="product-card-title">{item.title[lang]}</h3>
            </div>

            <p className="product-card-description">{item.description[lang]}</p>

            <button className="product-card-button" >
                Xizmatni ko'rish
            </button>
            <DynamicIcon 
                    lib={item.icon.lib} 
                    name={item.icon.name} 
                    className="product-card-bgIcon" 
                />
        </div>
    );
};