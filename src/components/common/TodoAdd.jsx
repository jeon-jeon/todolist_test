import { FaPlus } from "react-icons/fa";

const TodoAdd = ({ value, chgItem, add }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input
        style={{
          width: "300px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid grey",
        }}
        type="text"
        placeholder="Add a o new task..."
        onChange={chgItem}
        value={value}
      />
      <button
        onClick={add}
        style={{ border: "none", backgroundColor: "white" }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default TodoAdd;
