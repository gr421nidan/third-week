import React from "react";
import {useTaskModals} from "../model";
import UniversalButton from "@/shared/ui/buttons";
import {EButtonVariant} from "@/shared/ui/buttons/EButtonVariant.tsx";


interface ITaskCardProps {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    date: string;
    completedAt: string | null;
}

const TaskWidget: React.FC<ITaskCardProps> = ({id, title, description, completed, date, completedAt}) => {
    const {openModal, isToday} = useTaskModals();
    const styleText = `text-lg ${completed ? "line-through text-gray-400" : ""}`;
    const handleOpenModal = (type: "edit" | "complete" | "delete") =>
        (taskId?: string) => openModal(type, taskId);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div className="flex flex-col items-start gap-2">
                {completedAt && (
                    <span className="text-sm text-gray-500">Выполнено в {completedAt}</span>
                )}
                <span className={styleText}>{title}</span>
                <span className={styleText}>{description}</span>
            </div>

            {completed || date !== isToday ? (
                <UniversalButton variant={EButtonVariant.DELETE} onClick={() => handleOpenModal("delete")(id)}/>
            ) : (
                <div className="flex items-center gap-2">
                    <UniversalButton variant={EButtonVariant.DELETE} onClick={() => handleOpenModal("delete")(id)}/>
                    <UniversalButton variant={EButtonVariant.EDIT} onClick={() => handleOpenModal("edit")(id)}/>
                    <UniversalButton variant={EButtonVariant.COMPLETE} onClick={() => handleOpenModal("complete")(id)}/>
                </div>
            )}
        </div>
    );
};

export default TaskWidget;