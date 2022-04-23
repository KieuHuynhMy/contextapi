import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class TodoList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: "140px",
          textAlign: "center",
        }}
      >
        <p className="item">Learn English</p>
        <p className="item">Learn Javascript</p>
        <p className="item">Learn CSS3</p>
        <button className="ui button primary" onClick={changeTheme}>
          Change Theme
        </button>
      </div>
    );
  }
}
