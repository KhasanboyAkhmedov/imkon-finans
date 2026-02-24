import React from 'react';
import { FaFilePdf } from 'react-icons/fa6';
import './file-card.css';
import { LuDownload } from 'react-icons/lu';
import { useLanguage } from '../../hooks/useLanguage';

interface FileLanguageContent {
  name: string;
  _id: string;
}

interface RawFileItem {
  _id: string;
  uzb: FileLanguageContent;
  rus: FileLanguageContent;
  eng: FileLanguageContent;
  size: string;
  fileType: string;
  fileUrl: string;
  type: string;
}
interface FileCardProps {
  data: RawFileItem;
}
const FileCard: React.FC<FileCardProps> = ({ data }) => {
  const { lang } = useLanguage();
  const content = data[lang as keyof Pick<RawFileItem, 'uzb' | 'rus' | 'eng'>] || data.uzb;

  const handleOpenLink = () => {
    window.open(data.fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="file-card-container" onClick={handleOpenLink}>
        <div className="file-icon-wrapper">
            <FaFilePdf className="file-icon" />
        </div>
        
        <h3 className="file-name">{content?.name}</h3>
        
        <div className='file-info'>
            <p className="file-meta">
                {data.fileType}, {data.size}
            </p>
            <div className="download-icon-wrapper">
                <LuDownload className="download-icon" />
            </div>
        </div>
    </div>
  );
};

export default FileCard;