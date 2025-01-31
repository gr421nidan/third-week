import {ITask} from "@/entities/task/model";
import {useCompleteTask} from "@/shared/store/taskQuery.ts";

export const useCompletedTask = (task: ITask | null, onTaskComplete: (tasks: ITask[]) => void, onClose: () => void) => {
    const completedTaskMutation = useCompleteTask();
    const handleSubmit = async () => {
        if (task) {
            completedTaskMutation.mutate({id: task.id, completed: true}, {
                onSuccess: (updatedTasks) => {
                    onClose();
                    onTaskComplete(updatedTasks);
                },
            });
        }
    };
    return {handleSubmit};
};