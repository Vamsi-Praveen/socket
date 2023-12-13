import React, { useEffect, useState } from 'react'
import io from "socket.io-client"

const socket = io('http://localhost:4000');
const App = () => {
    const [room, setRoom] = useState('');
    const sendMessage = () => {
        socket.emit("roomMsg", { msg: inp, room: room })
    }
    const createRoom = () => {
        socket.emit("create-room", room);
    }
    const joinRoom = () => {
        socket.emit("join", join)
    }
    const [join, setjoin] = useState('')
    const [inp, setInp] = useState('')
    const [rm, setrm] = useState([])
    const [msg, setMsg] = useState([])
    useEffect(() => {
        socket.on("rec", (data) => {
            setMsg((prev) => ([...prev, data.message]))
        })
        socket.on("rmmsg", msg => {
            setrm((prev) => ([...prev, msg]))
            console.log(msg)
        })
    }, [socket])
    return (
        <>
            <input placeholder='create room' onChange={(e) => { setRoom(e.target.value) }} />
            <button onClick={createRoom}>Create Room</button><br /><br /><hr />
            <input placeholder='join room' onChange={(e) => { setjoin(e.target.value) }} />
            <button onClick={joinRoom}>join Room</button><br /><br /><hr />
            <input placeholder='message' onChange={(e) => { setInp(e.target.value) }} />
            <button onClick={sendMessage}>Message</button>
            {
                msg.map((e) => (
                    <li>{e}</li>
                ))
            }
            {
                rm.map((e) => {
                    <li>{e}</li>
                })
            }
        </>
    )
}

export default App
