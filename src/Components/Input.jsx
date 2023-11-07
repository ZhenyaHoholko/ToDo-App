import React, { useState } from "react";

function Input({ task, setTask }) {
  const [text, setText] = useState("");
  const buttonClick = () => {
    setTask([...task, { id: new Date().getTime(), title: text }]);
    setText("");
    console.log(task);
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => buttonClick()}>Add task</button>
    </div>
  );
}

export default Input;
