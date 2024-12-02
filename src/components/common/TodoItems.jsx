import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const TodoItems = ({ items, remove }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checked = () => {
    setIsChecked((prev) => (prev ? false : true));
  };

  const checkedcss = { textDecoration: "line-through", color: "red" };
  const uncheckedcss = { textDecoration: "none", color: "black" };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      <div style={{ display: "flex" }}>
        <button
          onClick={checked}
          style={{ border: "none", backgroundColor: "white" }}
        >
          {isChecked ? (
            <MdOutlineCheckBox size={20} />
          ) : (
            <MdOutlineCheckBoxOutlineBlank size={20} />
          )}
        </button>
        <div style={isChecked ? checkedcss : uncheckedcss}>{items}</div>
      </div>
      <button
        onClick={remove}
        style={{ border: "none", backgroundColor: "white", color: "red" }}
      >
        <FaTrashCan />
      </button>
    </div>
  );
};

export default TodoItems;
