import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import type { NewsItem } from './newsData';
import './newsFeed.css';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../commons';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const navigate = useNavigate();
  
  return (
    <article className="news-card">
      <div className="news-card__date">{formatDate(item.createdAt)}</div>
      <p className="news-card__description">{item.description}</p>
      <button className="news-card__button" onClick={() => navigate(`/news/${item._id}`)}>
        <span className="news-card__button-text">Batafsil</span>
        <HiOutlineArrowRight className="news-card__button-icon"/>
      </button>
    </article>
  );
};

export default NewsCard