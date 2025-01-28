import {ReactNode} from 'react';
import TaskBoard from "@/widget/taskBoard/ui";

const MainPage = (): ReactNode => {

    return (
        <main className="p-4 m-5">
            <header className="text-center">
                <div className="p-5 rounded-lg shadow bg-white">
                    <h1 className="text-3xl text-gray-600 font-bold">Todo App</h1>
                </div>
            </header>
            <section>
                <TaskBoard/>
            </section>
        </main>
    );
};

export default MainPage;