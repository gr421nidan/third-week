import React from "react";
import DeleteButton from "@/shared/ui/buttons/deleteButton";
import EditButton from "@/shared/ui/buttons/editButton";
import CompleteButton from "@/shared/ui/buttons/completedButton";
import {useTaskModals} from "../model";


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
                <DeleteButton onClick={() => openModal("delete", id)}/>
            ) : (
                <div className="flex items-center gap-2">
                    <DeleteButton onClick={() => openModal("delete", id)}/>
                    <EditButton onClick={() => openModal("edit", id)}/>
                    <CompleteButton onClick={() => openModal("complete", id)}/>
                </div>
            )}
        </div>
    );
};

export default TaskWidget;