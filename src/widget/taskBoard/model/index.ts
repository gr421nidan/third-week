import {useStore} from "@tanstack/react-store";
import {useTasks} from "@/shared/store/taskQuery";
import {taskStore, taskActions} from "@/shared/store/taskStore";
import {useEffect} from "react";

export const useTaskBoardLogic = () => {
    const {data: fetchedTasks = [], isLoading} = useTasks();
    const {tasks, selectDate, modalType, selectedTask} = useStore(taskStore);
    const isToday = new Date().toISOString().split("T")[0];
    useEffect(() => {
        if (fetchedTasks.length > 0) {
            taskActions.setTasks(fetchedTasks);
        }
    }, [fetchedTasks]);

    return {
        isLoading,
        isModalOpen: modalType !== null,
        modalType,
        selectedTask,
        closeModal: taskActions.closeModal,
        openModal: taskActions.openModal,
        activeTasks: tasks.filter((task) => task.date === selectDate && !task.completed),
        completedTasks: tasks.filter((task) => task.date === selectDate && task.completed),
        selectDate,
        setSelectDate: taskActions.setSelectDate,
        isToday,
    };
};