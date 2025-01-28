import React from "react";
import {Trash} from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const DeleteButton: React.FC<ButtonProps> = ({className, ...props}) => {
    return (
        <button
            className={`bg-red-100 text-red-600 hover:bg-red-200 rounded p-2 shadow ${className}`}
            {...props}>
            <Trash size={16}/>
        </button>
    );
};

export default DeleteButton;