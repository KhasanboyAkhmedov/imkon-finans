import './newsFeed.css'; 
import './NewsCardSkeleton.css'; 

const NewsCardSkeleton = () => {
  return (
    <article className="news-card news-card-skeleton">
      
      <div className="news-card__date skeleton-box"></div>

      <div className="news-card__description skeleton-container">
         <span className="skeleton-box skeleton-line"></span>
         <span className="skeleton-box skeleton-line medium"></span>
         <span className="skeleton-box skeleton-line short"></span>
      </div>

      <div className="news-card__button skeleton-box"></div>
    </article>
  );
};

export default NewsCardSkeleton;