import { Modal, Tabs } from 'antd';
import ApplicationForm from '../../components/credit-calculator/application-form';
import CreditCalculator from '../../components/credit-calculator/credit-calculator';

interface LoanModalProps {
    isOpen: boolean;
    onClose: () => void;
    activeTab: string;
    setActiveTab: (key: string) => void;
}

const LoanModal = ({ isOpen, onClose, activeTab, setActiveTab }: LoanModalProps) => {
    const items = [
        { key: 'application', label: 'Ariza', children: <ApplicationForm /> },
        {  key: 'credit-calculator', label: 'Kredit kalkulyatori', children: <CreditCalculator onSwitch={() => setActiveTab('application')} /> },
    ];

    return (
        <Modal
            title={activeTab === 'application' ? "Ariza yuborish" : "Kredit kalkulyator"}
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width="90%"
            zIndex={2000}
            destroyOnHidden
        >
            <Tabs
                activeKey={activeTab}
                onChange={(key) => setActiveTab(key)}
                items={items}
                className="custom-tabs"
            />
        </Modal>
    );
};

export default LoanModal;