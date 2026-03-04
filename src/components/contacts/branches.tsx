import { useEffect, useMemo, useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './branches.css';
import { type Branch } from './branches.data';
import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { LuClock10 } from 'react-icons/lu';
import { Skeleton } from 'antd';

const Branches = () => {
    const { t } = useTranslation('pages', { keyPrefix: 'contacts' });
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);
    const mapRef = useRef<ymaps.Map | undefined>(undefined);
    const { lang } = useLanguage();

    const MAP_VIEW_FALLBACK: [number, number] = [40.765167, 72.354389];

    useEffect(() => {
        const fetchBranches = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/branches/all`);
                if (!res.ok) throw new Error(`Failed to fetch branches: ${res.status}`);
                const data = await res.json();
                setBranches(data);
                if (data.length > 0) setSelectedBranchId(data[0]._id);
            } catch (error) {
                console.error("Failed to load branches", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBranches();
    }, []);

    const activeBranch = branches.find(b => b._id === selectedBranchId) || branches[0];

    const { coords, hasPin } = useMemo(() => {
        if (!activeBranch) return { coords: MAP_VIEW_FALLBACK, hasPin: false };

        if (activeBranch.coordinates && activeBranch.coordinates.length >= 2) {
            const lat = parseFloat(activeBranch.coordinates[0]);
            const lng = parseFloat(activeBranch.coordinates[1]);
            if (!isNaN(lat) && !isNaN(lng)) return { coords: [lat, lng] as [number, number], hasPin: true };
        }

        if (activeBranch.mapEmbedUrl) {
            const match = activeBranch.mapEmbedUrl.match(/text=([\d.]+)(?:%2C|,)([\d.]+)/);
            if (match) {
                const lat = parseFloat(match[1]);
                const lng = parseFloat(match[2]);
                return { coords: [lat, lng] as [number, number], hasPin: true };
            }
        }

        return { coords: MAP_VIEW_FALLBACK, hasPin: false };
    }, [activeBranch]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.panTo(coords, { flying: true, duration: 1000 });
        }
    }, [coords]);

    return (branches &&
        <div className="bottom-section">
            <div className="map-container">
                {loading ? (
                    <Skeleton.Node active style={{ width: '100%', height: '100%' }}>
                        <div style={{ color: '#ccc' }}>Map Loading...</div>
                    </Skeleton.Node>
                ) : (
                    <YMaps> 
                        <Map 
                            instanceRef={mapRef}
                            state={{ center: coords, zoom: 16, controls: [] }}
                            className="map" 
                            width="100%"
                            height="100%"
                        >
                            <ZoomControl options={{ position: { right: '10px', top: '10px' } }} />
                            
                            {hasPin && (
                                <Placemark 
                                    geometry={coords} 
                                    options={{ preset: 'islands#redDotIcon' }}
                                />
                            )}
                        </Map>
                    </YMaps>
                )}
            </div>

            <div className="branches-wrapper">
                <h3 className="branches-title">{t('branches_title')}</h3>
                <div className="branches-grid">
                    {loading ? 
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="branch-card skeleton">
                                <Skeleton active paragraph={{ rows: 2 }} title={{ width: '60%' }} />
                            </div>
                        ))
                    : branches.map((branch) => (
                        <div 
                            key={branch._id} 
                            className={`branch-card ${selectedBranchId === branch._id ? 'active' : ''}`}
                            onClick={() => setSelectedBranchId(branch._id)}
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
                            {branch.workingDays && (
                                <div className="branch-info-footer">
                                    <div className="info-row">
                                        <LuClock10 className="info-icon" />
                                        <span className="info-text">
                                            {branch.workingDays[lang as keyof typeof branch.workingDays]}, {branch.workingHours}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Branches;