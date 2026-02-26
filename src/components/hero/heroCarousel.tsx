import React, { useState, useEffect, useCallback } from "react";
import "./heroCarousel.css";
import { shield } from "../../assets";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useLanguage } from "../../hooks/useLanguage";
import { useNavigate } from "react-router-dom";

interface LocalizedContent {
  title: string;
  description: string;
  features: string[];
  _id: string;
}

interface BannerAPIResponse {
  _id: string;
  uzb: LocalizedContent;
  rus: LocalizedContent;
  eng: LocalizedContent;
  imageUrl: string;
  createdAt: string;
}

const NavButton = ({ onClick, disabled, children }: { 
  onClick: () => void; 
  disabled: boolean; 
  children: React.ReactNode 
}) => (
  <button 
    className={`nav-btn ${disabled ? "disabled" : "active"}`} 
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

const HeroCarousel: React.FC = () => {
  const [slides, setSlides] = useState<BannerAPIResponse[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {lang} = useLanguage();
  
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/banners/all`);
        const result = await response.json();
        setSlides(result.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const nextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, slides.length]);

  if (loading) {
    return (
      <section className="hero-container skeleton-active">
        <div className="hero-content">
          <header className="hero-text">
            <div className="skeleton-title" />
            <div className="skeleton-subtitle" />
            <div className="features-list">
              {[1, 2].map((i) => (
                <div key={i} className="feature-item">
                  <img className="icon-shield" src={shield} alt="shield"/>
                  <div className="skeleton-banner-line" />
                </div>
              ))}
            </div>
            <div className="skeleton-btn" />
          </header>
          <div className="hero-image-wrapper">
             <div className="skeleton-img" />
          </div>
        </div>
      </section>
    );
  }
  if (slides.length === 0) return null;

  const activeSlide = slides[currentIndex];
  const content = activeSlide[lang];

  return (
    <section className="hero-container">
      <div className="hero-content" key={activeSlide._id}>
        <header className="hero-text slide-animation">
          <h1>{content.title}</h1>
          <p className="subtitle">{content.description}</p>
          
          <div className="features-list">
            {content.features.map((item, idx) => (
              <div key={idx} className="feature-item">
                <img className="icon-shield" src={shield} alt="shield"/>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <button onClick={() => navigate(`/banners/${activeSlide._id}`)} className="cta-button">
            {lang === "uzb" ? "Batafsil" : lang === "rus" ? "Подробнее" : "Read More"} 
            <HiOutlineArrowRight className="cta-icon" />
          </button>
        </header>

        <div className="hero-image-wrapper">
          <img 
            src={activeSlide.imageUrl} 
            alt={content.title} 
            className="hero-image"
            loading="lazy"
            decoding="async" 
          />
        </div>
        
        <div className="carousel-controls">
          <NavButton onClick={prevSlide} disabled={currentIndex === 0}>
            <HiOutlineArrowLeft size={16} />
          </NavButton>

          <NavButton onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
            <HiOutlineArrowRight size={16} />
          </NavButton>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;