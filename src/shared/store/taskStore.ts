import { Store } from "@tanstack/store";
import { ITask } from "@/entities/task/model";

interface ITaskState {
    tasks: ITask[];
    selectDate: string;
    modalType: "create" | "edit" | "complete" | "delete" | null;
    selectedTask: ITask | null;
}

export const taskStore = new Store<ITaskState>({
    tasks: [],
    selectDate: new Date().toISOString().split("T")[0],
    modalType: null,
    selectedTask: null,
});
export const taskActions = {
    openModal: (type: "create" | "edit" | "complete" | "delete", taskId?: string) => {
        taskStore.setState((prev) => ({
            ...prev,
            modalType: type,
            selectedTask: taskId ? prev.tasks.find((task) => task.id === taskId) || null : null,
        }));
    },

    closeModal: () => {
        taskStore.setState((prev) => ({
            ...prev,
            modalType: null,
            selectedTask: null,
        }));
    },

    setTasks: (tasks: ITask[]) => {
        taskStore.setState((prev) => ({
            ...prev,
            tasks,
        }));
    },

    setSelectDate: (date: string) => {
        taskStore.setState((prev) => ({
            ...prev,
            selectDate: date,
        }));
    },
};