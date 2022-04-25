import React, { Component, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

// export default class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     // console.log(this.context);
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => {
//           return (
//             <ThemeContext.Consumer>
//               {(themeContext) => {
//                 const { isDarkTheme, lightTheme, darkTheme } = themeContext;
//                 const { isLoggedIn, changeAuthStatus } = authContext;
//                 const theme = isDarkTheme ? darkTheme : lightTheme;
//                 return (
//                   <nav
//                     style={{
//                       background: theme.background,
//                       color: theme.text,
//                       height: "120px",
//                     }}
//                   >
//                     <h1 style={{ textAlign: "center" }}>Academy</h1>
//                     <p
//                       onClick={changeAuthStatus}
//                       style={{ textAlign: "center" }}
//                     >
//                       {isLoggedIn ? "Log in" : "Log out"}
//                     </p>
//                     <div className="ui three buttons">
//                       <button className="ui button">Overview</button>
//                       <button className="ui button">Contact</button>
//                       <button className="ui button">Support</button>
//                     </div>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isDarkTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <nav
      style={{
        background: theme.background,
        color: theme.text,
        height: "120px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Academy</h1>
      <p onClick={changeAuthStatus} style={{ textAlign: "center" }}>
        {isLoggedIn ? "Log in" : "Log out"}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};

export default Navbar;
