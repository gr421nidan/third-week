import React from "react";

interface IColumnHeader {
    title: string;
    actionButton?: React.ReactNode;
}

const ColumnHeader: React.FC<IColumnHeader> = ({title, actionButton}:IColumnHeader) => {
    return (
        <div className="flex flex-row items-center mb-4 gap-5">
            <div className="flex flex-row items-center mb-4 gap-5">
                <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
                {actionButton && <div>{actionButton}</div>}
            </div>
        </div>
    );
};

export default ColumnHeader;