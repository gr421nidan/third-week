import {ITask} from "@/entities/task/model";
import {useDeletedTask} from "@/shared/store/taskQuery.ts";

export const useDeleteTask = (task: ITask | null, onTaskDelete: (tasks: ITask[]) => void, onClose: () => void) => {
    const deleteTaskMutation = useDeletedTask();
    const handleSubmit = async () => {
        if (task) {
            deleteTaskMutation.mutate(task.id, {
                onSuccess: (updatedTasks) => {
                    onClose();
                    onTaskDelete(updatedTasks);
                },
            })
        }
    };
    return {handleSubmit};
};