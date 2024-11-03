import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const useSocket = () => {
  const socketRef = useRef();

  useEffect(() => {
    // Create socket connection
    socketRef.current = io(process.env.REACT_APP_SOCKET_URL); // Set your socket URL

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return socketRef.current;
};

export default useSocket;
