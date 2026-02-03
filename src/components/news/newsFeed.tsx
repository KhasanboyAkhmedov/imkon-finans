import React from 'react';
import './newsFeed.css';
import { doubleCheks } from '../../assets';
import { newsData } from './newsData';
import NewsCard from './newsCard';

export const NewsFeed: React.FC = () => {
  return (
    <section className="news-container">
        <div className="news-wrapper container">
            <div className="news-header">
                <p className="news-header__title">
                    Eng muhim e'lonlar va jamiyatdagi yangiliklardan xabardor bo'ling.
                </p>
                <div className='news-header__list'>
                    <div className='news-header__list-item'>
                        <img className='news-header__list-icon' src={doubleCheks} alt="double cheks" />
                        <p className='news-header__list-text'>Jamiyat hayotidagi qiziqarli yangiliklar va eng muhim e’lonlar</p>
                    </div>
                    <div className='news-header__list-item'>
                        <img className='news-header__list-icon' src={doubleCheks} alt="double cheks" />
                        <p className='news-header__list-text'>Uchrashuv natijalari to‘g‘risida xabarnomalar va o‘tkazilayotgan tanlovlar haqida ma’lumotlar</p>
                    </div>
                </div>
            </div>

            <div className="news-grid">
                {newsData.map((item) => (
                    <NewsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    </section>
  );
};