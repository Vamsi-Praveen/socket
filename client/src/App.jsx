import React, { useEffect, useState } from 'react'
import { useSocket } from './context/socketContext.jsx'

const App = () => {
  const { socket } = useSocket();
  const [msg, setMsg] = useState('')
  const [rec, setRec] = useState([])
  const handleMessage = () => {
    socket.emit("message", msg);
  }
  useEffect(() => {
    socket.on("msg", (msg) => {
      setRec((old) => [...old, msg]);
    })
    console.log(socket)
  }, [])
  return (
    <>
      <h1>Chat</h1>
      {
        rec.map((msg) => {
          return (
            <li>{msg}</li>
          )
        })
      }
      <input placeholder='Message' onChange={(e) => { setMsg(e.target.value) }} />
      <button onClick={handleMessage}>Send Message</button>
    </>
  )
}

export default App
