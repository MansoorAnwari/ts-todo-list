import React from "react";
import { TodoItem as TodoItemType } from "./type";

type Props = {
  todo: TodoItemType;
  toggleTodo: (id: number) => void;
};

export const Todo: React.FC<Props> = (props) => {
  return (
    <li
      onClick={() => props.toggleTodo(props.todo.id)}
      className={props.todo.isCompleted ? "completed" : ""}
    >
      {props.todo.text}
    </li>
  );
};
