import {ITask, ICompleteTask} from "@/entities/task/model";
import {useCompleteTask} from "@/entities/task/model/taskQuery.ts";


export const useCompletedTask = (task: ITask | null, onClose: () => void) => {
    const completedTaskMutation = useCompleteTask();
    const handleSubmit = async () => {
        if (task) {
            try {
                await completedTaskMutation.mutateAsync(<ICompleteTask>{id: task.id, completed: true});
                onClose();
            } catch (error) {
                console.error("Ошибка при выполнении задачи:", error);
            }
        }
    };
    return {handleSubmit};
};