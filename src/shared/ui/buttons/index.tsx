import {Check, Trash, Edit, Plus} from "lucide-react";
import {FC, ButtonHTMLAttributes} from "react";

export enum EButtonVariant {
    COMPLETE = "complete",
    DELETE = "delete",
    EDIT = "edit",
    ADD = "add",
}

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: EButtonVariant;
}

const buttonIcons: Record<EButtonVariant, JSX.Element> = {
    [EButtonVariant.COMPLETE]: <Check size={16}/>,
    [EButtonVariant.DELETE]: <Trash size={16}/>,
    [EButtonVariant.EDIT]: <Edit size={16}/>,
    [EButtonVariant.ADD]: <Plus size={16}/>,
};

const buttonStyles: Record<EButtonVariant, string> = {
    [EButtonVariant.COMPLETE]: "bg-green-100 text-green-600 hover:bg-green-200",
    [EButtonVariant.DELETE]: "bg-red-100 text-red-600 hover:bg-red-200",
    [EButtonVariant.EDIT]: "bg-blue-100 text-blue-600 hover:bg-blue-200",
    [EButtonVariant.ADD]: "bg-white text-gray-700 hover:bg-purple-300",
};

const UniversalButton: FC<IIconButton> = ({variant, ...props}) => {
    return (
        <button {...props}
                className={`rounded p-2 shadow ${buttonStyles[variant]}`}>
            {buttonIcons[variant]}
        </button>
    );
};

export default UniversalButton;