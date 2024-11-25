import { useState } from "react";
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

  const handleMount = () => setVisible(!isVisible);

  return (
    <div>
      <button onClick={handleMount}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <HeaderWithLogs text="Hello world!!!" color="red" />}
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <p>{count}</p>
        <h1></h1>
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
