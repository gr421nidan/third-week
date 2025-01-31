import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, addTask, editTask, completeTask, deleteTask } from "@/entities/task/model";
import {taskActions} from "@/shared/store/taskStore.ts";

export const useTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks,
    });
};

export const useCreateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ title, description, date }: { title: string; description: string; date: string }) =>
            addTask(title, description, date),
        onSuccess: (newTasks) => {
            taskActions.setTasks(newTasks);
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};
export const useEditedTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, title, description }: { id: string; title: string; description: string }) =>
            editTask(id, title, description),
        onSuccess: (newTasks) => {
            taskActions.setTasks(newTasks);
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};
export const useCompleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
            completeTask(id, completed),
        onSuccess: (newTasks) => {
            taskActions.setTasks(newTasks);
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};

export const useDeletedTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteTask(id),
        onSuccess: (newTasks) => {
            taskActions.setTasks(newTasks);
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
    });
};