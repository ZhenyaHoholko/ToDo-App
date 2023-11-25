import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./Components/InputComponent";
import List from "./Components/List";
import { useState } from "react";

function App(inputText) {
  const [task, setTask] = useState([]);

  const handleDelete = (id) => {
    setTask([...task.filter((el) => el.id !== id)]);
  };
  const handleChange = (id, inputText) => {
    setTask([
      ...task.map((el) => (el.id === id ? { ...el, title: inputText } : el)),
    ]);
  };
  return (
    <div className="App">
      <p className="main_phrase">Let's do it!</p>
      <InputComponent task={task} setTask={setTask} />
      <div className="block">
        {task.map((item) => (
          <List
            key={item.id}
            item={item}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
