import { type ReactNode } from 'react';
import MainPage from "@/pages/main";
import { AppProvider } from "@/shared/";
import Modal from "react-modal";

Modal.setAppElement("#root");
const App = (): ReactNode => (
    <AppProvider>
        <MainPage />
    </AppProvider>
);

export default App;