import TaskWidget from "@/widget/task/ui";
import DatePic from "@/features/datePic/ui";
import React from 'react';
import {AddTaskModal} from "@/features/addTask";
import {useTaskBoardLogic} from "@/widget/taskBoard/model";
import {EditTaskModal} from "@/features/editTask";
import {CompletedTaskModal} from "@/features/completedTask";
import {DeleteTaskModal} from "@/features/deleteTask";

const BoardWidget = () => {
    const {
        isLoading,
        selectDate,
        setSelectDate,
        isToday,
        modalType,
        selectedTask,
        openModal,
        closeModal,
        activeTasks,
        completedTasks,
    } = useTaskBoardLogic();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="p-4 mt-5 bg-white min-h-screen flex flex-col items-center rounded-lg shadow">
            <DatePic selectDate={selectDate} onDateChange={setSelectDate}/>
            <section className="grid grid-cols-2 gap-4 mt-5 min-h-screen min-w-full">
                <div className="bg-purple-100 p-4 rounded-lg shadow-md ">
                    <div className="flex flex-row items-center mb-4 gap-5">
                        {selectDate === isToday ? (
                            <div className="flex flex-row items-center mb-4 gap-5">
                                <h2 className="text-xl font-semibold text-gray-700">Текущие задачи</h2>
                                <button
                                    onClick={() => openModal("create" )}
                                    className="bg-white shadow-md text-gray-700 rounded px-3 py-1 hover:bg-purple-300">
                                    +
                                </button>
                            </div>
                        ) : (<div className="flex flex-row items-center mb-4 gap-5">
                            <h2 className="text-xl font-semibold text-gray-700">Невыполненные задачи выбранного дня</h2>
                        </div>)}
                    </div>
                    <div className="flex flex-col gap-5">
                        {activeTasks.map((task) => (
                            <TaskWidget key={task.id} id={task.id} title={task.title} description={task.description}
                                        completed={task.completed}/>
                        ))}
                    </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg shadow-md flex-1">
                    <div className="flex flex-row items-center mb-4 gap-5">
                        <h2 className="text-xl font-semibold text-gray-700">Выполненные задачи</h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        {completedTasks.map((task) => (
                            <TaskWidget key={task.id} id={task.id} title={task.title} completed={task.completed}
                                        description={task.description}/>
                        ))}
                    </div>
                </div>
            </section>
            <AddTaskModal isOpen={modalType === "create"} onClose={closeModal}/>
            <EditTaskModal isOpen={modalType === "edit"} task={selectedTask} onClose={closeModal}/>
            <CompletedTaskModal isOpen={modalType === "complete"} task={selectedTask} onClose={closeModal}/>
            <DeleteTaskModal isOpen={modalType === "delete"} task={selectedTask} onClose={closeModal}/>

        </div>
    );
};

export default BoardWidget;