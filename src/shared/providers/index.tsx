import React, {PropsWithChildren} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export {AppProvider}