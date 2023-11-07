import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
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
      <p>Let's do it!</p>
      <Input task={task} setTask={setTask} />
      {task.map((item) => (
        <List
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
