import React, { useState } from "react";

function Input({ task, setTask }) {
  const [text, setText] = useState("");
  const [agreement, setAgreement] = useState(false);
  const handleClick = () => {
    setTask([...task, { id: new Date().getTime(), title: text }]);
    // setTask("");
    setAgreement(true);
  };
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <button onClick={handleClick}>Add task</button>
    </div>
  );
}

export default Input;
