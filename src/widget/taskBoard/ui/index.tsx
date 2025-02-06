import TaskWidget from "@/widget/task/ui";
import DatePic from "@/features/datePic/ui";
import {AddTaskModal} from "@/features/addTask";
import {useTaskBoardLogic} from "@/widget/taskBoard/model";
import {EditTaskModal} from "@/features/editTask";
import {CompletedTaskModal} from "@/features/completedTask";
import {DeleteTaskModal} from "@/features/deleteTask";
import UniversalButton from "@/shared/ui/buttons";
import {EButtonVariant} from "@/shared/ui/buttons/EButtonVariant.tsx";
import ColumnHeader from "@/shared/ui/components/headerColumn.tsx";

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
        return (<div>Загрузка...</div>);
    }
    const handleOpenModal = () =>
        openModal("create");

    return (
        <div className="p-4 mt-5 bg-white min-h-screen flex flex-col items-center rounded-lg shadow">
            <DatePic selectDate={selectDate} onDateChange={setSelectDate}/>
            <section className="grid grid-cols-2 gap-4 mt-5 min-h-screen min-w-full">
                <div className="bg-purple-100 p-4 rounded-lg shadow-md ">
                    <ColumnHeader
                        title={selectDate === isToday ? "Текущие задачи" : "Невыполненные задачи выбранного дня"}
                        actionButton={selectDate === isToday ? <UniversalButton variant={EButtonVariant.ADD}
                                                                                onClick={handleOpenModal}/> : null}/>
                    <div className="flex flex-col gap-5">
                        {activeTasks.map((task) => (
                            <TaskWidget key={task.id} id={task.id} title={task.title} description={task.description}
                                        completed={task.completed} completedAt={task.completedAt ?? null}
                                        date={task.date}/>
                        ))}
                    </div>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg shadow-md flex-1">
                    <ColumnHeader title={"Выполненные задачи"}/>
                    <div className="flex flex-col gap-5">
                        {completedTasks.map((task) => (
                            <TaskWidget key={task.id} id={task.id} title={task.title} completed={task.completed}
                                        description={task.description} date={task.date}
                                        completedAt={task.completedAt ?? null}/>
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