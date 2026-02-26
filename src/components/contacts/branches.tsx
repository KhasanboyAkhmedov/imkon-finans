import { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './branches.css';
import { branches } from './branches.data';
import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const Branches = () => {
    const { t } = useTranslation('pages', { keyPrefix: 'contacts' });
    const [selectedBranchId, setSelectedBranchId] = useState('1');
    const mapRef = useRef<ymaps.Map | undefined>(undefined);
    const {lang} = useLanguage();

    const activeBranch = branches.find(b => b.id === selectedBranchId) || branches[0];

    useEffect(() => {
        if (mapRef.current) {
        mapRef.current.panTo(activeBranch.coordinates, {
            flying: true,
            duration: 1000,
        });
        }
    }, [activeBranch]);

    return (
        <div className="bottom-section">
        <div className="map-container">
            <YMaps> 
                <Map 
                    instanceRef={mapRef}
                    defaultState={{ 
                        center: activeBranch.coordinates, 
                        zoom: 17, 
                        controls: [] 
                    }}
                    className="map" 
                    width="100%"
                    height="100%"
                >
                    <ZoomControl options={{ position: { right: '10px', top: '10px' } }} />
                    
                    <Placemark 
                        geometry={activeBranch.coordinates} 
                        options={{ preset: 'islands#redDotIcon' }}
                    />
                </Map>
            </YMaps>
        </div>

        <div className="branches-wrapper">
            <h3 className="branches-title">{t('branches_title')}</h3>
            <div className="branches-grid">
            {branches.map((branch) => (
                <div 
                key={branch.id} 
                className={`branch-card ${selectedBranchId === branch.id ? 'active' : ''}`}
                onClick={() => setSelectedBranchId(branch.id)}
                >
                <h4 className="branch-name">{branch.name[lang as keyof typeof branch.name]}</h4>
                <div className="branch-phones">
                    {branch.phones.map((phone) => (
                    <div key={phone} className="phone-item">
                        <FaPhoneAlt className="phone-icon" />
                        <span>{phone}</span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Branches;