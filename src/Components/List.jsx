import { useState } from "react";

function List({ state, setState, listItem, handleClick, task }) {
  const handleChange = (listItem) => {
    setState((prev) => !prev);
    console.log(task.filter((i) => i.id === listItem.id));
  };

  const saveData = () => {};
  return (
    <div key={listItem.id}>
      {state ? <input /> : listItem.title}
      <button onClick={() => handleClick()}>Delete</button>
      <button onClick={() => handleChange(listItem)}>
        {state ? "Save" : "Change"}
      </button>
    </div>
  );
}

export default List;
