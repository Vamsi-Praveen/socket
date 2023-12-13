import { createContext, useContext, useEffect, useMemo, useState } from "react";
import io from 'socket.io-client'

const SocketContext = createContext(null);

const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
    const socket = useMemo(() => io("http://localhost:3001"), []);
    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketProvider, useSocket };