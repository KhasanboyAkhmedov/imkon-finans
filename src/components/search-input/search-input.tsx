import { useState, useEffect } from 'react';
import { Input, Dropdown, Modal } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { allCreditsData, type Credit } from '../../pages/all-credits/all-credits.data';
import './search-input.css';

const SearchInput = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 540);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(inputValue.trim());
        }, 300);
        return () => clearTimeout(handler);
    }, [inputValue]);

    const filteredResults = debouncedQuery !== '' 
        ? allCreditsData.filter(item =>
            item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(debouncedQuery.toLowerCase())
          )
        : [];

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
            {filteredResults.length > 0 ? (
                filteredResults.map((item: Credit) => (
                    <div 
                        key={item.id} 
                        className="search_result_item"
                        onClick={() => handleResultClick(`/credits/${item.id}`)}
                    >
                        <div className="result_icon_box">
                            <item.icon />
                        </div>
                        <div className="result_text_box">
                            <h4>{highlightText(item.title, debouncedQuery)}</h4>
                            <p>{highlightText(item.description, debouncedQuery)}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no_results">Natija topilmadi...</div>
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
                            placeholder="Qidiruv..."
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
                dropdownRender={() => (
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
                    placeholder="Qidiruv"
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