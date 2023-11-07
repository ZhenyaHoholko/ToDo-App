import { useState } from "react";

function List({ item, handleDelete, handleChange }) {
  const [change, setChange] = useState(false);
  const [inputText, setInputText] = useState(item.title);
  const goChange = () => {
    if (change) {
      handleChange(item.id, inputText);
      setChange(!change);
    } else {
      setChange(!change);
    }
  };

  return (
    <div key={item.id}>
      {change ? (
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      ) : (
        <p> {item.title}</p>
      )}
      <button onClick={() => handleDelete(item.id)}>Delete</button>
      <button onClick={() => goChange()}>{change ? "Save" : "Change"}</button>
    </div>
  );
}

export default List;
