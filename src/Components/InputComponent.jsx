import React, { useState } from "react";
import { Button, Input } from "antd";

function InputComponent({ task, setTask }) {
  const [text, setText] = useState("");
  const buttonClick = () => {
    setTask([...task, { id: new Date().getTime(), title: text }]);
    setText("");
    console.log(task);
  };
  return (
    <div>
      <Input
        className="inputStyle"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button className="btn" onClick={() => buttonClick()}>
        Add task
      </Button>
    </div>
  );
}

export default InputComponent;
