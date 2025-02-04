import React, {PropsWithChildren} from "react";
import Modal from "react-modal";

interface IModalComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalComponent: React.FC<PropsWithChildren<IModalComponentProps>> = ({isOpen, onClose, children}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="mt-10 p-6 bg-purple-100 rounded-lg shadow-lg max-w-md mx-auto">
            {children}
        </Modal>
    );
};

export default ModalComponent;