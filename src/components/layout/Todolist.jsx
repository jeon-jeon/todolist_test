import { useState } from "react";
import TodoAdd from "../common/TodoAdd";
import TodoItems from "../common/TodoItems";

const Todolist = () => {
  const [item, setItem] = useState("");
  const chgItem = (e) => {
    setItem((prev) => e.target.value);
  };

  const [todolist, setTodolist] = useState([]);
  const add = () => {
    if (item.length > 0) {
      setTodolist((prev) => [...prev, item]);
      setItem("");
    }
  };

  const remove = (i) => {
    setTodolist((prev) => {
      const newArr = [...prev];
      const filterdArr = newArr.filter((v, idx) => i != idx);
      return filterdArr;
    });
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: "400px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        borderRadius: "4px",
        padding: "10px",
        gap: "10px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>TO DO LIST</h1>
      <TodoAdd value={item} chgItem={chgItem} add={add} />
      {todolist.map((v, i) => (
        <TodoItems key={i} items={v} remove={() => remove(i)} />
      ))}
    </section>
  );
};

export default Todolist;
