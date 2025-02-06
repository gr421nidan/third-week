import React from "react";
import {UseFormRegister, FieldErrors} from "react-hook-form";

interface ITaskFormInputs {
    title: string;
    description: string;
    id?: string;
}

interface ITaskForm {
    register: UseFormRegister<ITaskFormInputs>;
    errors: FieldErrors<ITaskFormInputs>;
}


const TaskForm: React.FC<ITaskForm> = ({register, errors}) => {
    return (
        <div>
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
        </div>
    );
};

export default TaskForm;