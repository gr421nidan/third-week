import {ITaskBase} from "@/entities/task/model";
import {useForm} from "react-hook-form";
import {useCreateTask} from "@/entities/task/model/taskQuery.ts";

export const useAddTask = (onClose: () => void) => {

    const createTaskMutation = useCreateTask();
    const {register, handleSubmit, reset, formState: {errors}} = useForm<ITaskBase>();
    const onSubmit = async ({title, description}: ITaskBase) => {
        const dateNow = new Date().toISOString().split("T")[0];
        await createTaskMutation.mutateAsync({title, description, date: dateNow}, {
            onSuccess: () => {
                reset();
                onClose();
            }, onError: (error) => {
                console.error("Ошибка при создании задачи:", error);
            }
        });
    };

    return {register, handleSubmit: handleSubmit(onSubmit), errors};
};