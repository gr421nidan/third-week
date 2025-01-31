export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    date: string;
}

// Достаю задачи из localStorage
export const getTasks = (): ITask[] => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
};

// Сохранение задач в localStorage
export const saveTasks = async (tasks: ITask[]): Promise<void> => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Создание задачи
export const addTask = async (title: string, description: string, date: string): Promise<ITask[]> => {
    const tasks = getTasks();
    const newTask: ITask = {
        id: crypto.randomUUID(),
        title,
        description,
        completed: false,
        date,
    };
    const updatedTasks = [...tasks, newTask];
    await saveTasks(updatedTasks);
    return updatedTasks;
};

//Редактирование задачи
export const editTask = async (id: string, title: string, description: string): Promise<ITask[]> => {
    const tasks = getTasks();
    const updatedTasks = tasks.map(task =>
        task.id === id ? {...task, title, description} : task
    );
    await saveTasks(updatedTasks);
    return updatedTasks;
};


//Выполнение задачи
export const completeTask = async (id: string, completed: boolean): Promise<ITask[]> => {
    const tasks = getTasks();
    const updatedTasks = tasks.map(task =>
        task.id === id ? {...task, completed} : task
    );
    await saveTasks(updatedTasks);
    return updatedTasks;
};


//Удаление задачи
export const deleteTask = async (id: string): Promise<ITask[]> => {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== id);
    await saveTasks(updatedTasks);
    return updatedTasks;
};

