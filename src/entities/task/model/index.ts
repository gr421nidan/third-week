import { getTasks, saveTasksToLocalStorage } from "@/shared/task/localStorage";

export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    date: string;
    completedAt?: string | null;
}
export interface ITaskBase{
    title: string;
    description: string;
}
export interface IAddTask extends ITaskBase{
    date: string;
}
export interface IEditTask extends ITaskBase{
    id?: string;
}
export interface ICompleteTask extends ITaskBase{
    id: string;
    completed: boolean;
}

export const addTask = async ({title, description, date}:IAddTask): Promise<ITask[]> => {
    const tasks = getTasks();
    const newTask: ITask = {
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
        date,
    };
    const updatedTasks = [...tasks, newTask];
    await saveTasksToLocalStorage(updatedTasks);
    return updatedTasks;
};

export const editTask = async ({id, title, description}:IEditTask): Promise<ITask[]> => {
    const tasks = getTasks();
    const updatedTasks = tasks.map(task =>
        task.id === id ? {...task, title, description} : task
    );
    await saveTasksToLocalStorage(updatedTasks);
    return updatedTasks;
};

export const completeTask = async ({id, completed}:ICompleteTask): Promise<ITask[]> => {
    const tasks = getTasks();
    const updatedTasks = tasks.map(task =>
        task.id === id
            ? {
                ...task,
                completed,
                completedAt: completed ? new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : null
            } : task
    );
    await saveTasksToLocalStorage(updatedTasks);
    return updatedTasks;
};

export const deleteTask = async (id:string): Promise<ITask[]> => {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    await saveTasksToLocalStorage(updatedTasks);
    return updatedTasks;
};

