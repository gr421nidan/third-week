import React from "react";
import DeleteButton from "@/shared/ui/buttons/deleteButton";
import EditButton from "@/shared/ui/buttons/editButton";
import CompleteButton from "@/shared/ui/buttons/completedButton";

type TaskCardProps = {
    id: string;
    title: string;
    completed: boolean;
};

const TaskWidget: React.FC<TaskCardProps> = ({ id, title, completed }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className={`text-lg ${completed ? "line-through text-gray-400" : ""}`}>{title}</span>
            </div>
            <div className="flex items-center gap-2">
                <DeleteButton/>
                <EditButton />
                <CompleteButton/>
            </div>
        </div>
    );
};

export default TaskWidget;