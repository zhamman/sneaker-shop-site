import React, { useState } from "react";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import { CountContext, ActiveCartContext } from "./Contexts/Contexts";

function App() {
  const [count, setCount] = useState(0);
  const [cartActive, setCartActive] = useState(false);

  const handleCart = () => {
    setCartActive(curr => !curr);
  };

  return (
    <div className="App">
      <CountContext.Provider value={{ count, setCount }}>
        <ActiveCartContext.Provider
          value={{ cartActive, handleCart, setCartActive }}
        >
          <Navbar count={count} />
          <Display count={count} />
        </ActiveCartContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

export default App;
