import classes from "../style/button.module.css";
function Button() {
  return (
    <>
      <button>Button</button>
      <button className={classes.button}>click me</button>
    </>
  );
}

export default Button;
