import React from "react";
import ModalComponent from "@/shared/ui/modal";
import { useAddTask } from "../model/index.ts";
import { ITask } from "@/entities/task/model";

interface IAddTaskModalProps {
    isOpen: boolean;
    onTaskAdded: (tasks: ITask[]) => void;
    onClose:()=>void
}

const AddTaskModal: React.FC<IAddTaskModalProps> = ({isOpen, onClose, onTaskAdded}) => {

    const { register, handleSubmit, errors } = useAddTask(onTaskAdded, onClose);

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Создать задачу</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Название задачи"
                        {...register("title", {required: "Название задачи обязательно"})}
                        className="border p-2 w-full rounded mb-2"
                    />
                    {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                </div>
                <div>
                    <textarea
                        placeholder="Описание задачи"
                        {...register("description", {required: "Описание задачи обязательно"})}
                        className="border p-2 w-full rounded mb-2"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </div>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose}
                            className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-gray-500">
                        Отмена
                    </button>
                    <button onClick={handleSubmit}
                            className="bg-gray-400 text-white px-4 py-2 rounded shadow hover:bg-purple-300">
                        Создать
                    </button>
                </div>
            </form>
        </ModalComponent>
);
};

export default AddTaskModal;