import {useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Home.tsx";
import CreateToDo from "./CreateToDo.tsx";
import ShowToDo from "./ShowToDo.tsx";
import {ToDo} from "./ToDo.tsx";

function App() {

    const [ToDoEntry, setToDoEntry] = useState<ToDo[]>([]);

    useEffect(() => {
        axios.get('/api/todo').then((results) => {
            console.log(results)
            setToDoEntry(results.data);
        });
    }, [])


  return (
    <>
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/ToDo" element={<ShowToDo ToDo={ToDoEntry}/>}/>
              <Route path="/create" element={<CreateToDo lastId={ToDoEntry.length + 1} action={(value) => {
                  axios.post('https://localhost:5173/create', value).then(() => {
                  })
              }} />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
