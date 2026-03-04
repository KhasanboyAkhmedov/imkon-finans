import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { CreditCard } from '../credit-card/creditCard';
import './ourProducts.css';
import { CreditCardSkeleton } from '../credit-card/credit-card-skeleton';
import type { Credit, CreditsApiResponse } from './productsData';
import { useTranslation } from 'react-i18next';

export const OurProducts: React.FC = () => {
    const { t } = useTranslation('main', { keyPrefix: 'our_products' });
    const navigate = useNavigate();
    const [products, setProducts] = useState<Credit[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/credits/all?page=1&pageSize=6`);
            if (!response.ok) throw new Error('Network error');
            
            const result: CreditsApiResponse = await response.json();
            setProducts(result.data);
        } catch {
            console.log(t('error_message'));
        } finally {
            setLoading(false);
        }
        };
        fetchProducts();
    }, []);

    return (
        <section className="our-products container">
            <div className="our-products-header-wrapper">
                <h2 className="our-products-header-title">{t('title')}</h2>
                <button className="our-products-header-button" onClick={() => navigate('/credits')}>
                    {t('view_all')} <HiOutlineArrowRight className="our-products-header-button-icon" />
                </button>
            </div>

            <div className="grid">
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => <CreditCardSkeleton key={index} />)
                    : products.map((item) => (
                        <CreditCard item={item} key={item._id} />
                    ))}
            </div>
        </section>
    );
};