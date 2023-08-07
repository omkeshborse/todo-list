//  import logo from './logo.png';
import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import "./App.css";
import TaskAdd from "./components/TaskAdd";

function App() {

   const [tasks, setTasks] = useState([
    
   ]);
  return (
    <div className="App">
      <Header />
      <main>
        <TaskAdd tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
