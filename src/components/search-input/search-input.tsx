import { useState, useEffect } from 'react';
import { Input, Dropdown, Modal } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './search-input.css';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { DynamicIcon } from '../../commons/dynamic-icon';

export interface TranslatedText {
    uzb: string;
    rus?: string;
    eng?: string;
}

export interface SearchResult {
    _id: string;
    title: TranslatedText;
    description: TranslatedText;
    icon: {
        lib: 'fa' | 'fa6' | 'bi' | 'bs' | 'md';
        name: string;
    };
}

const SearchInput = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation('layout', { keyPrefix: 'navbar' });
    const { lang } = useLanguage();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 540);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handler = setTimeout(async () => {
            setDebouncedQuery(inputValue.trim())
            if (inputValue.trim()) {
                setLoading(true);
                try {
                    const response = await fetch(
                        `${import.meta.env.VITE_API_URL}/credits/search?content=${inputValue.trim()}&lang=${lang}`
                    );
                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    console.error("Search error:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setResults([]);
            }
        }, 300);

        return () => clearTimeout(handler);
    }, [inputValue, lang]);

    const highlightText = (text: string, query: string) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === query.toLowerCase() 
                ? <span key={index} className="search-highlight">{part}</span> 
                : part
        );
    };

    const handleResultClick = (path: string) => {
        setInputValue('');
        setIsModalOpen(false); 
        navigate(path);
    };

    const renderResultsList = () => (
        <>
            {loading ? (
                <div className="no_results">{t('search.loading')}...</div>
            ) : results.length > 0 ? (
                results.map((item: SearchResult) => {
                    const title = item.title[lang] || item.title['uzb'];
                    const desc = item.description[lang] || item.description['uzb'];

                    return (
                        <div 
                            key={item._id} 
                            className="search_result_item"
                            onClick={() => handleResultClick(`/credits/${item._id}`)}
                        >
                            <div className="result_icon_box">
                                <DynamicIcon 
                                    lib={item.icon.lib} 
                                    name={item.icon.name}
                                />
                            </div>
                            <div className="result_text_box">
                                <h4>{highlightText(title, inputValue)}</h4>
                                <p>{highlightText(desc, inputValue)}</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="no_results">{t('search.not_found')}</div>
            )}
        </>
    );

    if (isMobile) {
        return (
            <>
                <div className="search_icon_trigger" onClick={() => setIsModalOpen(true)}>
                    <FiSearch />
                </div>

                <Modal
                    open={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    footer={null}
                    closable
                    width="95%"
                    className="mobile_search_modal"
                    centered
                >
                    <div className="modal_search_wrapper">
                        <Input 
                            autoFocus
                            className="header_antd_input"
                            placeholder={t('search.placeholder')}
                            prefix={<FiSearch className="search_icon_left" />}
                            value={inputValue} 
                            onChange={(e) => setInputValue(e.target.value)}
                            allowClear
                        />
                        <div className="modal_results_container">
                            {debouncedQuery.length > 0 && renderResultsList()}
                        </div>
                    </div>
                </Modal>
            </>
        );
    }

    return (
        <div className="header_search_container">
            <Dropdown
                popupRender={() => (
                    <div className="search_dropdown_box">
                        {renderResultsList()}
                    </div>
                )}
                open={inputValue.trim().length > 0}
                trigger={['click']}
                placement="bottomLeft"
            >
                <Input 
                    className="header_antd_input"
                    placeholder={t('search.placeholder')}
                    prefix={<FiSearch className="search_icon_left" />}
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    allowClear
                />
            </Dropdown>
        </div>
    );
};

export default SearchInput;