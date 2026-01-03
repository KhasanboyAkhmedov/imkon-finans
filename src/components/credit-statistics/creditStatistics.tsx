import React from 'react';
import './creditStatistics.css';
import { creditStatistics } from './creditStatisticsData';

const CreditStatistics: React.FC = () => {

    return (
        <section className="stats-container container">
        <div className="stats-header">
            <div className='stats-heading'>
                <h2>Kredit yo'nalishlari bo'yicha</h2>
                <h2 className="highlight">Statistika</h2>
            </div>
            <p className="stats-description">
                Mijozlarga taqdim etilgan kreditlar turli sohalar bo'yicha ajratilgan bo'lib, 
                quyida ularning tafsilotlari keltirilgan.
            </p>
        </div>

        <div className="stats-grid">
            {creditStatistics.map((item) => (
            <div key={item.id} className="stat-card">
                <img className="stat-icon" src={item.icon} alt={item.category} />
                <h2 className="stat-amount">{item.amount}</h2>
                <p className="stat-unit">ming so'm</p>
                <p className="stat-category">{item.category}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default CreditStatistics;