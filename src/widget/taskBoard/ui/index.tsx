import TaskWidget from "@/widget/task/ui";
import DatePic from "@/features/datePic/ui";
import React, {useState} from 'react';

const dataTasks = [
    {id: "1", title: "первая", completed: false, date: "2025-01-28"},
    {id: "2", title: "вторая", completed: true, date: "2025-01-28"},
    {id: "3", title: "третья", completed: false, date: "2025-01-29"},
    {id: "4", title: "четвёртая", completed: true, date: "2025-01-29"},
];
const BoardWidget = () => {
    const [selectDate, setSelectDate] = useState<string>(
        new Date().toISOString().split('T')[0]
    );
    const tasks = dataTasks;
    return (
        <div className="p-4 mt-5 bg-white min-h-screen flex flex-col items-center rounded-lg shadow">
            <DatePic selectDate={selectDate} onDateChange={setSelectDate}/>
            <section className="grid grid-cols-2 gap-4 mt-5 min-h-screen min-w-full">
                <div className="bg-purple-100 p-4 rounded-lg shadow-md ">
                    <div className="flex flex-row items-center mb-4 gap-5">
                        <h2 className="text-xl font-semibold text-gray-700">Текущие задачи</h2>
                        <button
                            className="bg-white shadow-md text-gray-700 rounded px-3 py-1 hover:bg-purple-300">
                            +
                        </button>
                    </div>
                    <div className="flex flex-col gap-5">
                        {tasks
                            .filter((task) => !task.completed)
                            .map((task) => (
                                <TaskWidget key={task.id} id={task.id} title={task.title} completed={task.completed}/>
                            ))}
                    </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg shadow-md flex-1">
                    <div className="flex flex-row items-center mb-4 gap-5">
                        <h2 className="text-xl font-semibold text-gray-700">Выполненные задачи</h2>
                    </div>
                    <div className="flex flex-col gap-5">
                        {tasks
                            .filter((task) => task.completed)
                            .map((task) => (
                                <TaskWidget key={task.id} id={task.id} title={task.title} completed={task.completed}/>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BoardWidget;