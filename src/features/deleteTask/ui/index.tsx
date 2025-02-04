import React from "react";
import ModalComponent from "@/shared/ui/modal";
import { useDeleteTask } from "../model/index.ts";
import { ITask } from "@/entities/task/model";


interface IDeleteTaskModalProps {
    isOpen: boolean;
    task: ITask | null;
    onClose: () => void;
}

const DeleteTaskModal: React.FC<IDeleteTaskModalProps> = ({ isOpen, task, onClose}) => {
    const { handleSubmit } = useDeleteTask(task, onClose);

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Вы точно хотите удалить задачу?</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-gray-500"
                    >
                        Нет
                    </button>
                    <button
                        type="submit"
                        className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-purple-300"
                    >
                        Да
                    </button>
                </div>
            </form>
        </ModalComponent>
);
};

export default DeleteTaskModal;