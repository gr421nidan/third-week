import React from "react";
import ModalComponent from "@/shared/ui/modal";
import {useCompletedTask} from "../model/index.ts";
import {ITask} from "@/entities/task/model";
import ButtonAction from "@/shared/ui/buttons/buttonAction.tsx";

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
                <ButtonAction onClick={onClose} label={"Нет"} className="hover:bg-gray-500"/>
                <ButtonAction onClick={handleSubmit} label={"Да"} className="hover:bg-purple-300"/>
            </div>

        </ModalComponent>
    );
};

export default CompletedTaskModal;