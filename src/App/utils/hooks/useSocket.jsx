import { useContext } from "react";
import socketContext from "../contexts/socketContext.js";

const useSocket = () => useContext(socketContext);

export default useSocket;
