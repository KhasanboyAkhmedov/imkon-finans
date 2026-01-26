import React from 'react';
import { FaFilePdf } from 'react-icons/fa6';
import type { BusinessFile } from './file-card.type';
import './file-card.css';
import { LuDownload } from 'react-icons/lu';

interface FileCardProps {
  data: BusinessFile;
}

const FileCard: React.FC<FileCardProps> = ({ data }) => {
  const handleOpenLink = () => {
    window.open(data.fileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="file-card-container" onClick={handleOpenLink}>
        <div className="file-icon-wrapper">
            <FaFilePdf className="file-icon" />
        </div>
        
        <h3 className="file-name">{data.name}</h3>
        
        <div className='file-info'>
            <p className="file-meta">
                {data.type}, {data.size}
            </p>
            <div className="download-icon-wrapper">
                <LuDownload className="download-icon" />
            </div>
        </div>
    </div>
  );
};

export default FileCard;