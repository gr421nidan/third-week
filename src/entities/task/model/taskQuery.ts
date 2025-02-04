import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {addTask, editTask, completeTask, deleteTask} from "@/entities/task/model";
import {taskActions} from "@/shared/store/taskStore.ts";
import {getTasks} from "@/shared/task/localStorage";

export enum QueryKey {
    TASKS = "tasks",
}

export const useTasks = () => {
    return useQuery({
        queryKey: [QueryKey.TASKS],
        queryFn: getTasks,
    });
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addTask,
        onSuccess: async (newTasks) => {
            taskActions.setTasks(newTasks);
            await queryClient.invalidateQueries({queryKey: [QueryKey.TASKS]});
        },
    });
};
export const useEditedTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: editTask,
        onSuccess: async (newTasks) => {
            taskActions.setTasks(newTasks);
            await queryClient.invalidateQueries({queryKey: [QueryKey.TASKS]});
        },
    });
};
export const useCompleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: completeTask,
        onSuccess: async (newTasks) => {
            taskActions.setTasks(newTasks);
            await queryClient.invalidateQueries({queryKey: [QueryKey.TASKS]});
        },
    });
};

export const useDeletedTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTask,
        onSuccess: async (newTasks) => {
            taskActions.setTasks(newTasks);
            await queryClient.invalidateQueries({queryKey: [QueryKey.TASKS]});
        },
    });
};