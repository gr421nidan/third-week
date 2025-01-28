import React from "react";
import {Check} from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CompleteButton: React.FC<ButtonProps> = ({className, ...props}) => {
    return (
        <button
            className={`bg-green-100 text-green-600 hover:bg-green-200 rounded p-2 shadow ${className}`}
            {...props}>
            <Check size={16}/>
        </button>
    );
};

export default CompleteButton;