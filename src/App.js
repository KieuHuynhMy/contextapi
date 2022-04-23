import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container segment raised very padded text">
          <AuthContextProvider>
            <ThemeContextProvider>
              <Navbar />
              <TodoList />
            </ThemeContextProvider>
          </AuthContextProvider>
        </div>
      </div>
    );
  }
}

export default App;
