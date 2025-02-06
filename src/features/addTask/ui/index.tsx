import React from "react";
import ModalComponent from "@/shared/ui/modal";
import { useAddTask } from "../model/index.ts";
import ButtonAction from "@/shared/ui/buttons/buttonAction.tsx";
import TaskForm from "@/shared/ui/components/taskForm.tsx";

interface IAddTaskModalProps {
    isOpen: boolean;
    onClose:()=>void
}

const AddTaskModal: React.FC<IAddTaskModalProps> = ({isOpen, onClose}) => {

    const { register, handleSubmit, errors } = useAddTask( onClose);

    return (
        <ModalComponent isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Создать задачу</h2>
            <form onSubmit={handleSubmit}>
                <TaskForm register={register} errors={errors}/>
                <div className="flex justify-end gap-2">
                    <ButtonAction onClick={onClose} label={"Отмена"} className="hover:bg-gray-500"/>
                    <ButtonAction onClick={handleSubmit} label={"Создать"} className="hover:bg-purple-300"/>
                </div>
            </form>
        </ModalComponent>
);
};

export default AddTaskModal;