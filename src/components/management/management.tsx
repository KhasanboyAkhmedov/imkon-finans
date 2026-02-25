import { useRef, useState } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import './management.css';
import ManagementInfo from './managementInfo';
import { useLanguage } from '../../hooks/useLanguage';

export interface ManagementMemberContent {
    name: string;
    description: string;
    _id: string;
}

export interface ManagementMember {
  _id: number;
  uzb: ManagementMemberContent;
  rus: ManagementMemberContent;
  eng: ManagementMemberContent;
  imageUrl: string;
  type: string;
}

export interface InfoItem {
  id: number;
  text: string;
}

interface ManagementProps {
  title: string;
  infoData: InfoItem[];
  members: ManagementMember[];
  loading?: boolean;
}

const ManagementImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="mgmt-image-container">
            {!isLoaded && <div className="mgmt-image-skeleton" />}
            <img
                src={src}
                alt={alt}
                className={`mgmt-photo ${isLoaded ? 'loaded' : 'loading'}`}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
};

const ManagementSkeleton = () => (
    <div className="mgmt-slide-grid skeleton-active">
        <div className="mgmt-text-content">
            <div className="skeleton-line title" />
            <div className="skeleton-quote-box">
                <div className="skeleton-line text" />
                <div className="skeleton-line text short" />
            </div>
        </div>
        <div className="mgmt-image-content">
            <div className="mgmt-image-container">
                <div className="mgmt-image-skeleton" />
            </div>
        </div>
    </div>
);

const Management = ({ title, infoData, members, loading }: ManagementProps) => {
    const slider = useRef<CarouselRef>(null);
    const { lang } = useLanguage();
    const [activeBtn, setActiveBtn] = useState<'prev' | 'next' | null>(null);

    const handleBeforeChange = (from: number, to: number) => {
        const direction = to > from ? 'next' : 'prev';
        setActiveBtn(direction);
        setTimeout(() => setActiveBtn(null), 400);
    };

    return (
        <div className="mgmt-container">
            <h2 className="mgmt-main-title container">{title}</h2>
            <ManagementInfo infoData={infoData} />
            
            <div className="mgmt-carousel-wrapper container">
                {loading ? (
                    <ManagementSkeleton />
                ) : members.length > 0 ? (
                    <>
                        <div className="mgmt-static-navigation">
                            <button 
                                onClick={() => slider.current?.prev()}
                                className={`mgmt-nav-btn ${activeBtn === 'prev' ? 'active' : ''}`}
                            >
                                <HiOutlineArrowLeft />
                            </button>
                            <button 
                                onClick={() => slider.current?.next()}
                                className={`mgmt-nav-btn ${activeBtn === 'next' ? 'active' : ''}`}
                            >
                                <HiOutlineArrowRight />
                            </button>
                        </div>

                        <Carousel
                            key={members.length}
                            ref={slider}
                            dots={false}
                            infinite={members.length > 2}
                            autoplay={members.length > 2}
                            autoplaySpeed={3000}
                            beforeChange={handleBeforeChange}
                            speed={800}
                        >
                            {members.map((member) => {
                                const content = member[lang as keyof Pick<ManagementMember, 'uzb'|'rus'|'eng'>] || member.uzb;
                                return (
                                    <div key={member._id}>
                                        <div className="mgmt-slide-grid">
                                            <div className="mgmt-text-content">
                                                <h3 className="mgmt-name">{content.name}</h3>
                                                <div className="mgmt-quote-box">
                                                    <p className="mgmt-quote">"{content.description}"</p>
                                                    <div className="mgmt-quote-footer">
                                                        <FaQuoteLeft className="mgmt-red-quote-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mgmt-image-content">
                                                <ManagementImage src={member.imageUrl} alt={content.name} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Management;