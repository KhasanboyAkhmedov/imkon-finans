import React, { useEffect, useState } from 'react';
import './newsFeed.css';
import { doubleCheks } from '../../assets';
import type { NewsItem } from './newsData';
import NewsCard from './newsCard';
import NewsCardSkeleton from './newsCardSkeleton';

export const NewsFeed: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(true);
    
    useEffect(() => {
    const fetchNews = async () => {
        try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/news/all?page=1&pageSize=4`);
        const result = await response.json();
        
        setNews(result.data || []);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setisLoading(false);
        }
    };

        fetchNews();
    }, []);

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
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <NewsCardSkeleton key={index} />
                        ))
                    ) : (
                        news.map((item) => (
                            <NewsCard key={item._id} item={item} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};