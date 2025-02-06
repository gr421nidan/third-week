import React from "react";
import ModalComponent from "@/shared/ui/modal";
import {useEditTask} from "../model/index.ts";
import {ITask} from "@/entities/task/model";
import ButtonAction from "@/shared/ui/buttons/buttonAction.tsx";
import TaskForm from "@/shared/ui/components/taskForm.tsx";

interface IEditTaskModalProps {
    isOpen: boolean;
    task: ITask | null;
    onClose: () => void;
}

const EditTaskModal: React.FC<IEditTaskModalProps> = ({isOpen, task, onClose}) => {
    const {register, handleSubmit, errors} = useEditTask(task, onClose);
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose}>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Редактировать задачу</h2>
            <form onSubmit={handleSubmit}>
                <TaskForm register={register} errors={errors}/>

                <div className="flex justify-end gap-2">
                    <ButtonAction onClick={onClose} label={"Отмена"} className="hover:bg-gray-500"/>
                    <ButtonAction onClick={handleSubmit} label={"Редактировать"} className="hover:bg-purple-300"/>
                </div>
            </form>

        </ModalComponent>
    );
};

export default EditTaskModal;