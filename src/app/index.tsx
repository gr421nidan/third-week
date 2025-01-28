import { type ReactNode } from 'react';
import MainPage from "@/pages/main";
import { AppProvider } from "@/shared/";

const App = (): ReactNode => (
    <AppProvider>
        <MainPage />
    </AppProvider>
);

export default App;