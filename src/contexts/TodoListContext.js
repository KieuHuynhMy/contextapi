import React, { createContext, useState, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  //   const [todos, setTodos] = useState([
  //     { id: 1, text: "Learn Context" },
  //     { id: 2, text: "Learn Hook" },
  //     { id: 3, text: "Learn " },
  //   ]);
  const [todos, dispatch] = useReducer(todosReducer, [
    { id: 1, text: "Learn Context" },
    { id: 2, text: "Learn Hook" },
    { id: 3, text: "Learn " },
  ]);

  //   const addTodo = (todo) => {
  //     setTodos([...todos, { id: Math.random(), text: todo }]);
  //   };

  //   const removeTodo = (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== Number(id)));
  //   };

  return (
    // <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};
export default TodoListContextProvider;
