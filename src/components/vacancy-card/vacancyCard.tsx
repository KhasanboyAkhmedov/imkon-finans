import React from 'react';
import './vacancyCard.css';
import type { Vacancy } from '../../pages/vacancies/vacancies.data';
import { BiBriefcase, BiMapPin } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: Vacancy;
}

const VacancyCard: React.FC<Props> = ({ data }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/vacancies/${data._id}`);
    };
    return (
        <div className="vacancy-card">
            <div className="vacancy-header">
                <div className="vacancy-icon-wrapper">
                    <BiBriefcase className="main-icon" />
                </div>
                <div className="title-row">
                    <h3 className="vacancy-title">{data.title}</h3>
                    <span className="vacancy-badge">{data.hours}</span>
                </div>
            </div>
            <div className="location-row">
                <BiMapPin className="pin-icon" />
                <span className="location-text">{data.location}</span>
            </div>
        
            <button className="vacancy-button" onClick={handleNavigation}>
                Ish Tavsifi
            </button>
        </div>
    );
};

export default VacancyCard;