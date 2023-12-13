import { createContext, useContext, useMemo } from "react";
import io from 'socket.io-client'

const SocketContext = createContext(null);

const useSocket = () => {
    const socket = useContext(SocketContext);
    if (!socket) throw new Error('useSocket must be used within the SocketProvider');
    return socket;
    
};

const SocketProvider = ({ children }) => {
    const socket = useMemo(() => io("http://localhost:4000"), []);
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketProvider, useSocket };