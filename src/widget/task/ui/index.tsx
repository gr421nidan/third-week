import React from "react";
import {useTaskModals} from "../model";
import UniversalButton, {EButtonVariant} from "@/shared/ui/buttons";


type TaskCardProps = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    date: string;
    completedAt: string | null;
};

const TaskWidget: React.FC<TaskCardProps> = ({id, title, description, completed, date, completedAt}) => {
    const {openModal, isToday} = useTaskModals();

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div className="flex flex-col items-start gap-2">
                {completedAt && (
                    <span className="text-sm text-gray-500">Выполнено в {completedAt}</span>
                )}
                <span className={`text-lg ${completed ? "line-through text-gray-400" : ""}`}>{title}</span>
                <span className={`text-sm ${completed ? "line-through text-gray-400" : ""}`}>{description}</span>

            </div>

            {completed || date != isToday ? (
                <UniversalButton variant={EButtonVariant.DELETE} onClick={() => openModal("delete", id)}/>
            ) : (
                <div className="flex items-center gap-2">
                    <UniversalButton variant={EButtonVariant.DELETE} onClick={() => openModal("delete", id)}/>
                    <UniversalButton variant={EButtonVariant.EDIT} onClick={() => openModal("edit", id)}/>
                    <UniversalButton variant={EButtonVariant.COMPLETE} onClick={() => openModal("complete", id)}/>
                </div>
            )}
        </div>
    );
};

export default TaskWidget;