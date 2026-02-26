import { useRef, useState, useEffect, useMemo } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import './partnersCarousel.css';
import { useTranslation } from 'react-i18next';

interface PartnerItem {
    _id: string;
    imageUrl: string;
    name?: string;
}

const PartnersCarousel = () => {
    const { t } = useTranslation('main', { keyPrefix: 'partners_carousel' });
    const slider = useRef<CarouselRef>(null);
    const [activeBtn, setActiveBtn] = useState<'prev' | 'next' | null>('next');
    
    const [partners, setPartners] = useState<PartnerItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

    const fetchPartners = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/partners/all`);
            const result = await response.json();
            if (result.data) {
                setPartners(result.data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPartners();
    }, []);

    const displayData = useMemo(() => {
        if (loading) {
            return Array.from({ length: 5 }).map((_, i) => ({
                _id: `skeleton-${i}`,
                imageUrl: ''
            }));
        }
        return partners;
    }, [loading, partners]);

    const handleBeforeChange = (from: number, to: number) => {
        const isNext = (to > from) || (from === displayData.length - 1 && to === 0);
        const direction = isNext ? 'next' : 'prev';
        setActiveBtn(direction);
        setTimeout(() => setActiveBtn(null), 500);
    };

    return (
        <div className='partners-carousel-container container'>
            <div className='partners-carousel-header'>
                <h2 className='partners-carousel-title'>{t('title')}</h2>
                <div className='partners-carousel-navigation'>
                    <button 
                        onClick={() => slider.current?.prev()}
                        className={`partners-carousel-navigation-btn ${activeBtn === 'prev' ? 'active' : ''}`}
                        disabled={loading}
                    >
                        <HiOutlineArrowLeft />
                    </button>
                    <button 
                        onClick={() => slider.current?.next()}
                        className={`partners-carousel-navigation-btn ${activeBtn === 'next' ? 'active' : ''}`}
                        disabled={loading}
                    >
                        <HiOutlineArrowRight />
                    </button>
                </div>
            </div>

            <Carousel
                ref={slider}
                dots={false}
                autoplay={!loading}
                autoplaySpeed={3000}
                infinite={displayData.length > 1}
                slidesToShow={4}
                slidesToScroll={1}
                beforeChange={handleBeforeChange}
                responsive={[
                    { breakpoint: 1024, settings: { slidesToShow: 3.5 } },
                    { breakpoint: 768, settings: { slidesToShow: 2.5 } },
                    { breakpoint: 480, settings: { slidesToShow: 1.6 } },
                ]}
            >
                {displayData.map((partner) => {
                    const isImgLoaded = loadedImages[partner._id];
                    const showSkeleton = loading || !isImgLoaded;

                    return (
                        <div className='partner-slider' key={partner._id}>
                            <div className='partner-wrapper'>
                                {showSkeleton && (
                                    <div className="partners-skeleton-overlay"/>
                                )}
                                
                                {!loading && (
                                    <img 
                                        className={`partner-image ${isImgLoaded ? 'opacity-100' : 'opacity-0'}`} 
                                        src={partner.imageUrl} 
                                        alt="Partner"
                                        onLoad={() => setLoadedImages(prev => ({ ...prev, [partner._id]: true }))}
                                      />
                                )}
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default PartnersCarousel;