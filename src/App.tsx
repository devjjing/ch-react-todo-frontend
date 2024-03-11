import React, {useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Home.tsx";
import CreateToDo from "./CreateToDo.tsx";
import ShowToDo from "./ShowToDo.tsx";

function App() {

    const [ToDoEntry, setToDoEntry] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:8080').then((results) => {
            setToDoEntry(results.data.results);
        });
    }, [])


  return (
    <>
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/ToDo" element={<ShowToDo/>}/>
              <Route path="/create" element={<CreateToDo lastId={ToDoEntry.length + 1} action={(value) => {
                  axios.post('https://localhost:5173/create', value).then(() => {
                  })
              }} />}/>
          </Routes>
          {JSON.stringify(ToDoEntry)}
        </Router>
    </>
  )
}

export default App
