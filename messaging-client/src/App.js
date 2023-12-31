import Chat from "./components/Chat";
import "./App.css";
import Sidebar from "./components/Sidebar";
import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js'


function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    const pusher = new Pusher('5d51f511d895aad858db', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind_all()
      channel.unsubscribe()  
    }
  }, [messages])
  console.log(messages)

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
