import { useGlobalContext } from "../context/myContext.jsx";

function Navbar(props) {
  const { number } = useGlobalContext();

  console.log(number);

  return <nav>I am a navbar</nav>;
}

export default Navbar;
