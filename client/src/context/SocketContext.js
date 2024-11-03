import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketConnection = io(process.env.REACT_APP_BACKEND_URL, {
      auth: {
        token: localStorage.getItem("token"),
      },
      reconnectionAttempts: 5, // Set number of reconnection attempts
      reconnectionDelay: 1000, // Delay between attempts
    });

    socketConnection.on("connect", () => {
      console.log("Socket connected:", socketConnection.id);
    });

    socketConnection.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
      // Optionally notify the user or handle error here
    });

    socketConnection.on("disconnect", () => {
      console.log("Socket disconnected. Attempting to reconnect...");
    });

    setSocket(socketConnection);

    return () => {
      console.log("Disconnecting socket...");
      socketConnection.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
