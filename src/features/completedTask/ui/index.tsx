import React from "react";
import ModalComponent from "@/shared/ui/modal";
import {useCompletedTask} from "../model/index.ts";
import {ITask} from "@/entities/task/model";

interface ICompletedTaskModalProps {
    isOpen: boolean;
    task: ITask | null;
    onClose: () => void;
}

const CompletedTaskModal: React.FC<ICompletedTaskModalProps> = ({isOpen, task, onClose}) => {

    const {handleSubmit} = useCompletedTask(task, onClose);
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Вы точно выполнили задачу?</h2>

            <div className="flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-gray-500">
                    Нет
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-purple-300">
                    Да
                </button>
            </div>

        </ModalComponent>
    );
};

export default CompletedTaskModal;