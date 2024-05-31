import { useState } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [hide, setHide] = useState(false);
  const obj = { id: 1, name: "Moksh" };

  const team = "RCB";
  return (
    <>
      <Button setHideFunc={setHide} obj={obj} team={team} />

      {!hide && (
        <>
          <Navbar />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
