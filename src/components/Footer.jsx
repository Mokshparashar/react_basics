import { useRef } from "react";

function Footer() {
  const elem = useRef();
  console.log(elem.current);
  return <footer ref={elem}>I am a Footer</footer>;
}

export default Footer;
