import React, { useRef } from "react";
import "./style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleADD: (e: React.FormEvent) => void;
}
const InputField: React.FC<props> = ({ todo, setTodo, handleADD }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleADD(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
