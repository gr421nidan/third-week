import {ITask} from "@/entities/task/model";
import {useEditedTask} from "@/shared/store/taskQuery.ts";
import {useForm} from "react-hook-form";

export const useEditTask = (task: ITask | null, onTaskUpdated: (tasks: ITask[]) => void, onClose: () => void) => {

    const editedTaskMutation = useEditedTask();
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const onSubmit = async (data: { title: string; description: string }) => {
        const {title, description} = data;
        if (task) {
            editedTaskMutation.mutate({id: task.id ,title, description}, {
                onSuccess: (updatedTasks) => {
                    reset();
                    onClose();
                    onTaskUpdated(updatedTasks);
                },
            })
        }
    };
    return {register, handleSubmit: handleSubmit(onSubmit), errors};
};