import React, { Component, useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

// export default class TodoList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item">Learn English</p>
//         <p className="item">Learn Javascript</p>
//         <p className="item">Learn CSS3</p>
//         <button className="ui button primary" onClick={changeTheme}>
//           Change Theme
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const [todo, setTodo] = useState();
  // const { todos, addTodo, removeTodo } = useContext(TodoListContext);
  const { todos, dispatch } = useContext(TodoListContext);
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo(todo);
    dispatch({ type: "ADD_TODO", text: todo });
  };

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    // removeTodo(id);
    dispatch({ type: "REMOVE_TODO", id: id });
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: "140px",
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo, index) => (
          <p
            className="item"
            id={todo.id}
            key={index}
            onClick={handleRemoveTodo}
          >
            {todo.text}
          </p>
        ))
      ) : (
        <p className="item">You have no todo</p>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">To do </label>
        <input type="text" id="todo" onChange={handleChange} />
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
      <button className="ui button primary" onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default TodoList;
