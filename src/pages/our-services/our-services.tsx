import { HiOutlineBadgeCheck } from "react-icons/hi"
import './our-services.css';
import { WhatWeDo } from "./our-services.data";
import OurServicesTab from "../../components/our-services/ourServicesTab";

const OurServices = () => {
  return (
    <section className="our-services-section container">
      <div className="our-services-container container">
        <h2 className="section-title">Xizmatlar</h2>
        <div className="our-services-grid">
          {WhatWeDo.map((item, index) => (
            <div key={index} className="our-service-card">
                <HiOutlineBadgeCheck className="our-service-icon-box" />
                <span className="our-service-text">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <OurServicesTab />
    </section>
  )
}

export default OurServices