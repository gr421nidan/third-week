import { ITask } from "@/entities/task/model";
import { useCreateTask } from "@/shared/store/taskQuery";
import { useForm } from "react-hook-form";

export const useAddTask = (onTaskAdded: (tasks: ITask[]) => void, onClose: () => void) => {

    const createTaskMutation = useCreateTask();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data: { title: string; description: string }) => {
        const { title, description } = data;
        const dateNow = new Date().toISOString().split("T")[0];

        createTaskMutation.mutate({ title, description, date: dateNow }, {
            onSuccess: (updatedTasks) => {
                reset();
                onClose();
                onTaskAdded(updatedTasks);
            },
        });
    };

    return { register, handleSubmit: handleSubmit(onSubmit), errors };
};