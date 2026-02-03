import React from 'react';
import './ourProducts.css';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from '../credit-card/creditCard';
import { allCreditsData } from '../../pages/all-credits/all-credits.data';

export const OurProducts: React.FC = () => {
    const navigate = useNavigate();
    if (!allCreditsData || allCreditsData.length === 0) {
        return <div>No products found.</div>;
    }
    
    return (
        <section className="our-products container">
            <div className="our-products-header-wrapper">
                <h2 className="our-products-header-title">Bizning mahsulotlarimiz</h2>
                <button className="our-products-header-button" onClick={()=> navigate('/credits')}>
                barcha xizmatlarni ko'rish <HiOutlineArrowRight className="our-products-header-button-icon" />
                </button>
            </div>

            <div className="grid">
                {allCreditsData.slice(0, 6).map((item) => (
                    <CreditCard item={item} />
                ))}
            </div>
        </section>
    );
};