import { useStore } from "@tanstack/react-store";
import { taskStore, taskActions } from "@/shared/store/taskStore";

export const useTaskModals = () => {
    const { selectedTask } = useStore(taskStore);
    const isToday = new Date().toISOString().split("T")[0];
    return {
        selectedTask,
        openModal: (type: "create" | "edit" | "complete" | "delete", taskId?: string) =>
            taskActions.openModal(type, taskId),
        isToday,
    };
};