import React from "react";
import {Edit} from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const EditButton: React.FC<ButtonProps> = ({className, ...props}) => {
    return (
        <button
            className={`bg-blue-100 text-blue-600 hover:bg-blue-200 rounded p-2 shadow ${className}`}
            {...props}>
            <Edit size={16}/>
        </button>
    );
};

export default EditButton;