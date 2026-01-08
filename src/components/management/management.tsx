import { useRef, useState } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import './management.css';
import ManagementInfo from './managementInfo';

export interface ManagementMember {
  id: number;
  name: string;
  quote: string;
  image: string;
}

export interface InfoItem {
  id: number;
  text: string;
}

interface ManagementProps {
  title: string;
  infoData: InfoItem[];
  members?: ManagementMember[];
}

const Management = ({ title, infoData, members }: ManagementProps) => {
    const slider = useRef<CarouselRef>(null);
    const [activeBtn, setActiveBtn] = useState<'prev' | 'next' | null>(null);
    const hasMembers = members && members.length > 0;
    
    const handleBeforeChange = (from: number, to: number) => {
        const direction = to > from ? 'next' : 'prev';
        setActiveBtn(direction);
        setTimeout(() => setActiveBtn(null), 400);
    };

    return (
        <div className="mgmt-container">
            <h2 className="mgmt-main-title container">{title}</h2>

            <ManagementInfo infoData={infoData} />
            {hasMembers && (
                <div className="mgmt-carousel-wrapper container">
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
                        ref={slider}
                        dots={false}
                        infinite={true}
                        autoplay={true}
                        autoplaySpeed={5000}
                        beforeChange={handleBeforeChange}
                        speed={800}
                    >
                    {members.map((member) => (
                        <div key={member.id}>
                            <div className="mgmt-slide-grid">
                                <div className="mgmt-text-content">
                                <h3 className="mgmt-name">{member.name}</h3>
                                <div className="mgmt-quote-box">
                                    <p className="mgmt-quote">"{member.quote}"</p>
                                    <div className="mgmt-quote-footer">
                                    <FaQuoteLeft className="mgmt-red-quote-icon" />
                                    </div>
                                </div>
                                </div>
                                
                                <div className="mgmt-image-content">
                                    <div className="mgmt-placeholder-img">
                                        {/* <img src={member.image} alt={member.name} style={{width: '100%', borderRadius: '12px'}} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
};

export default Management;