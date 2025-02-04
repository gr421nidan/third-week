import { ITask } from "@/entities/task/model";

export const getTasks = (): ITask[] => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) as ITask[] : [];
};

export const saveTasksToLocalStorage = async (tasks: ITask[]): Promise<void> => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};