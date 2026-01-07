import { useRef, useState } from 'react';
import { Carousel } from 'antd';
import './partnersCarousel.css';
import type { CarouselRef } from 'antd/es/carousel';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { partners } from './partnersData';

const PartnersCarousel = () => {
    const slider = useRef<CarouselRef>(null);
    const [activeBtn, setActiveBtn] = useState<'prev' | 'next' | null>('next');

    const handleBeforeChange = (from: number, to: number) => {
        const isNext = (to > from) || (from === partners.length - 1 && to === 0);
        const direction = isNext ? 'next' : 'prev';
        
        setActiveBtn(direction);

        setTimeout(() => {
            setActiveBtn(null);
        }, 500);
    };

  return (
    <div className='partners-carousel-container container'>
      <div className='partners-carousel-header'>
        <h2 className='partners-carousel-title'>
          Bizga ishonch bildirgan hamkorlar!
        </h2>
        <div className='partners-carousel-navigation'>
            <button 
                onClick={() => slider.current?.prev()}
                className={`partners-carousel-navigation-btn ${activeBtn === 'prev' ? 'active' : ''}`}
            >
                <HiOutlineArrowLeft />
            </button>
            <button 
                onClick={() => slider.current?.next()}
                className={`partners-carousel-navigation-btn ${activeBtn === 'next' ? 'active' : ''}`}
            >
                <HiOutlineArrowRight />
            </button>
        </div>
      </div>

      <Carousel
        ref={slider}
        dots={false}
        autoplay
        autoplaySpeed={3000}
        infinite={true}
        slidesToShow={4}
        slidesToScroll={1}
        beforeChange={handleBeforeChange}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3.5 } },
          { breakpoint: 768, settings: { slidesToShow: 2.5 } },
          { breakpoint: 480, settings: { slidesToShow: 1.6 } },
        ]}
      >
        {partners.map((partner) => (
            <div className='partner-slider' key={partner.id}>
                <div className='partner-wrapper'>
                    <img className='partner-image' src={partner.logo} alt={partner.name} />
                </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PartnersCarousel;