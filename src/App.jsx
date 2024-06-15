import { useState } from "react";
import Navbar from "../src/components/Navbar.jsx";
function App() {
  const [blackTheme, setBlackTheme] = useState(false);
  console.log(blackTheme);

  return (
    <>
      <div className={`${blackTheme ? "black-bg" : "white-bg"}`}>
        <button onClick={() => setBlackTheme(!blackTheme)}>toogle theme</button>
        <Navbar blackTheme={blackTheme} />
      </div>
    </>
  );
}

export default App;
