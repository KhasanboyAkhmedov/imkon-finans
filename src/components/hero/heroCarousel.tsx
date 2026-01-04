  import React, { useState, useEffect, useCallback } from "react";
  import "./heroCarousel.css";
  import { people, shield } from "../../assets";
  import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

  interface SlideData {
    id: number;
    title: string;
    subtitle: string;
    features: string[];
    buttonText: string;
    image: string;
  }

  const SLIDES: SlideData[] = [
    {
      id: 1,
      title: "QULAY VA ISHONCHLI INVESTITSIYALAR",
      subtitle: "в фирменных сервисных центрах",
      features: [
        "Сервисные центры в Москве, Санкт-Петербурге и Краснодаре",
        "Гарантия 14 дней на ремонт",
      ],
      buttonText: "Batafsil",
      image: people,
    },
    {
      id: 2,
      title: "QULAY VA ISHONCHLI INVESTITSIYALAR2",
      subtitle: "в фирменных сервисных центрах sdafjals;dfkja",
      features: [
        "Сервисные центры в Москве, Санкт-Петербурге и Краснодаре",
        "Гарантия 14 дней на ремонт",
      ],
      buttonText: "Batafsil",
      image:  people, 
    },
  ];

  const NavButton = ({ 
    onClick, 
    disabled, 
    children 
  }: { 
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
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    useEffect(() => {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }, [nextSlide]);

    const slide = SLIDES[currentIndex];

    return (
      <section className="hero-container">
        <div className="hero-content" key={slide.id}>
          <header className="hero-text slide-animation">
            <h1>{slide.title}</h1>
            <p className="subtitle">{slide.subtitle}</p>
            
            <div className="features-list">
              {slide.features.map((item, idx) => (
                <div key={idx} className="feature-item">
                  <img className="icon-shield" src={shield} alt="shield"/>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <button className="cta-button">
              {slide.buttonText} <HiOutlineArrowRight className="cta-icon" />
            </button>
          </header>

          <div className="hero-image-wrapper">
            <img src={slide.image} alt="Team" className="hero-image" />
          </div>
          
          <div className="carousel-controls">
            <NavButton 
              onClick={prevSlide} 
              disabled={currentIndex === 0}
            >
              <HiOutlineArrowLeft size={16} />
            </NavButton>

            <NavButton 
              onClick={nextSlide} 
              disabled={currentIndex === SLIDES.length - 1}          >
              <HiOutlineArrowRight size={16} />
            </NavButton>
          </div>
        </div>
      </section>
    );
  };

  export default HeroCarousel;