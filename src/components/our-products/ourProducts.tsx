import React from 'react';
import './ourProducts.css';
import { products } from './productsData';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export const OurProducts: React.FC = () => {
    const navigate = useNavigate();
    if (!products || products.length === 0) {
        return <div>No products found. Check productsData.ts</div>;
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
                {products.map((item) => (
                <div key={item.id} className="product-card" onClick={() => navigate(item.path)}>
                    <div className='product-card-title-wrapper'>
                        <div className={`product-card-iconWrapper`}>
                            <img src={item.icon} className='product-card-icon' alt='icon' />
                        </div>
                        <h3 className="product-card-title">{item.title}</h3>
                    </div>
                    <p className="product-card-description">{item.description}</p>
                    <button className={`product-card-button`}>
                        Xizmatni ko'rish
                    </button>
                    <img src={item.icon} className='product-card-bgIcon' alt='icon' />
                </div>
                ))}
            </div>
        </section>
    );
};