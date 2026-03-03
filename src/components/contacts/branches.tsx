import { useEffect, useMemo, useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import './branches.css';
import { branches as staticBranches, type Branch } from './branches.data';
import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { LuClock10 } from 'react-icons/lu';
import { Skeleton } from 'antd';

const Branches = () => {
    const { t } = useTranslation('pages', { keyPrefix: 'contacts' });
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedBranchId, setSelectedBranchId] = useState('1');
    const mapRef = useRef<ymaps.Map | undefined>(undefined);
    const {lang} = useLanguage();

    useEffect(() => {
        const fetchBranches = async () => {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setBranches(staticBranches);
            } catch (error) {
                console.error("Failed to load branches", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBranches();
    }, []);

    const getCoordsFromUrl = (url: string): [number, number] => {
        if (!url) return [40.765167, 72.354389];
        const match = url.match(/text=([\d.]+)(?:%2C|,)([\d.]+)/);
        if (match) {
            return [parseFloat(match[1]), parseFloat(match[2])];
        }

        return [40.765167, 72.354389]; 
    };

    const activeBranch = branches.find(b => b._id === selectedBranchId) || branches[0];
    const activeCoords = useMemo(() => activeBranch 
        ? getCoordsFromUrl(activeBranch.mapEmbedUrl) 
        : [40.765167, 72.354389], [activeBranch]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.panTo(activeCoords, {
                flying: true,
                duration: 1000,
            });
        }
    }, [activeCoords, loading]);

    return (
        <div className="bottom-section">
            <div className="map-container">
                {loading ?
                    <Skeleton.Node active style={{ width: '100%', height: '100%' }}>
                        <div style={{ color: '#ccc' }}>Map Loading...</div>
                    </Skeleton.Node>
                        :
                    <YMaps> 
                        <Map 
                            instanceRef={mapRef}
                            defaultState={{ 
                                center: activeCoords, 
                                zoom: 17, 
                                controls: [] 
                            }}
                            className="map" 
                            width="100%"
                            height="100%"
                        >
                            <ZoomControl options={{ position: { right: '10px', top: '10px' } }} />
                            
                            <Placemark 
                                geometry={activeCoords} 
                                options={{ preset: 'islands#redDotIcon' }}
                            />
                        </Map>
                    </YMaps>
                }
            </div>

            <div className="branches-wrapper">
                <h3 className="branches-title">{t('branches_title')}</h3>
                <div className="branches-grid">
                    {loading ? 
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="branch-card skeleton">
                                <Skeleton active paragraph={{ rows: 2 }} title={{ width: '60%' }} />
                            </div>
                        ))
                    :   branches.map((branch) => (
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
                            {branch.workingDays && 
                                <div className="branch-info-footer">
                                    <div className="info-row">
                                        <LuClock10 className="info-icon" />
                                        <span className="info-text">
                                            {branch.workingDays?.[lang as keyof typeof branch.workingDays] || ""}, {branch.workingHours}
                                        </span>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Branches;