import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import Header from "./components/Header.tsx";
import hoc from "./helpers/hoc.tsx";
import useCounter from "./hooks/useCounter.tsx";
import MousePosition from "./helpers/MousePosition.tsx";
import UsersList from "./components/UsersList.tsx";

const HeaderWithLogs = hoc(Header);

function App() {
  const [isVisible, setVisible] = useState(false);
  const { inc, dec, count } = useCounter(5);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMount = () => setVisible(!isVisible);

  return (
    <div
      style={{ backgroundColor: theme === "light" ? "lightcoral" : "darkcyan" }}
    >
      <button onClick={toggleTheme}>Theme</button>
      <button onClick={handleMount}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <HeaderWithLogs text="Hello world!!!" color="red" />}
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <p>{count}</p>
      </div>
      <MousePosition
        render={(position) => (
          <div>
            x: {position.x}, y: {position.y}{" "}
          </div>
        )}
      />
      <UsersList />
    </div>
  );
}

export default App;
