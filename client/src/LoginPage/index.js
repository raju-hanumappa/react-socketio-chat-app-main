import React from 'react'
import './style.css'
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useState } from 'react'
import io  from 'socket.io-client';
import { Button, Input } from '@chakra-ui/react';

const socket = io.connect("http://localhost:3001");

const LoginPage = () => {
    const [username, setUsername] = useState("");

  const dispatch = useDispatch();

    const joinRoom = (e) => {
      e.preventDefault();
      dispatch(
        login({
         name: username
        })
      );
    };

  return (
    <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <Input
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
          <Button colorScheme='teal' onClick={joinRoom}>Log in</Button>
        </div>
  )
}

export default LoginPage