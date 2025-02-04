import {ITask} from "@/entities/task/model";
import {useDeletedTask} from "@/entities/task/model/taskQuery.ts";


export const useDeleteTask = (task: ITask | null, onClose: () => void) => {
    const deleteTaskMutation = useDeletedTask();
    const handleSubmit = async () => {
        if (task) {
            try {
                await deleteTaskMutation.mutateAsync(task.id);
                onClose();
            } catch (error) {
                console.error("Ошибка при удалении задачи:", error);
            }
        }
    };
    return {handleSubmit};
};