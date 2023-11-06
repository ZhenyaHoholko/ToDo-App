import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [state, setState] = useState(false);

  const handleClick = (el) => {
    setTask([...task.filter((item) => item.id !== el.id)]);
  };

  return (
    <div className="App">
      <div>Let's do it!</div>
      <Input task={task} setTask={setTask} />
      {task.map(
        (el) => (
          <List
            state={state}
            setState={setState}
            listItem={el}
            handleClick={handleClick}
            task={task}
          />
        )
        // (<div>
        //   <button onClick={() => }>
        //     {state ? "Save" : "Change"}
        //   </button>{" "}
        // </div>
      )}
    </div>
  );
}

export default App;
