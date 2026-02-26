import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import type { NewsItem } from './newsData';
import './newsFeed.css';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../commons';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const content = item[lang];
  const { t } = useTranslation('main', { keyPrefix: 'common.buttons' });
  
  return (
    <article className="news-card">
      <div className="news-card__date">{formatDate(item?.createdAt)}</div>
      <p className="news-card__description">{content?.description}</p>
      <button className="news-card__button" onClick={() => navigate(`/news/${item._id}`)}>
        <span className="news-card__button-text">{t('more')}</span>
        <HiOutlineArrowRight className="news-card__button-icon"/>
      </button>
    </article>
  );
};

export default NewsCard