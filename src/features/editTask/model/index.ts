import {ITask, IEditTask} from "@/entities/task/model";
import {useForm} from "react-hook-form";
import {useEditedTask} from "@/entities/task/model/taskQuery.ts";

export const useEditTask = (task: ITask | null, onClose: () => void) => {

    const editedTaskMutation = useEditedTask();
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IEditTask>();
    const onSubmit = async ({title, description}: IEditTask) => {
        if (task) {
            await editedTaskMutation.mutateAsync({id: task.id, title, description}, {
                onSuccess: () => {
                    reset();
                    onClose();
                }, onError: (error) => {
                    console.error("Ошибка при редактировании задачи:", error);
                }
            });
        }
    };
    return {register, handleSubmit: handleSubmit(onSubmit), errors};
};