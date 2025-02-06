import React from "react";

interface IButtonAction {
    onClick: () => void;
    label: string;
    className?: string;
}

const ButtonAction: React.FC<IButtonAction> = ({ onClick, label, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-gray-500 ${className}`}
        >
            {label}
        </button>
    );
};

export default ButtonAction;