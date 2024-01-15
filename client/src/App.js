import "./App.css";
import io from "socket.io-client";
import LoginPage from './LoginPage'
import LogoutPage from './LogoutPage'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const socket = io.connect("http://localhost:3001");

function App() {

  const user = useSelector(selectUser)
  socket.emit("join_room", "");

  return (
    <div className="App">{user ? <LogoutPage socket={socket} username={user.name} room={""} /> : <LoginPage />} </div>
  );
}

export default App;
