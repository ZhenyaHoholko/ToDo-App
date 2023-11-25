import { Button, Input } from "antd";
import { useState } from "react";
import { DeleteOutlined, FormOutlined, CheckOutlined } from "@ant-design/icons";

function List({ item, handleDelete, handleChange }) {
  const [change, setChange] = useState(false);
  const [inputText, setInputText] = useState(item.title);
  const [through, setThrough] = useState(true);
  const goChange = () => {
    if (change) {
      handleChange(item.id, inputText);
      setChange(!change);
    } else {
      setChange(!change);
    }
  };

  return (
    <div key={item.id} className="tasks-style">
      {change ? (
        <Input
          className="inputStyle"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      ) : (
        <p
          onClick={() => setThrough((prev) => !prev)}
          className={through ? "crose task-style" : "croseNo task-style"}
        >
          {" "}
          {item.title}
        </p>
      )}
      <div className="buttons-style">
        {/* <Button >
          Delete
        </Button> */}
        <DeleteOutlined
          className="btn-tasks"
          onClick={() => handleDelete(item.id)}
        />
        {/* <Button className="btn" onClick={() => goChange()}>
          {change ? "Save" : "Change"}
        </Button> */}
        {change ? (
          <CheckOutlined className="btn-tasks" onClick={() => goChange()} />
        ) : (
          <FormOutlined className="btn-tasks" onClick={() => goChange()} />
        )}
      </div>
    </div>
  );
}

export default List;
