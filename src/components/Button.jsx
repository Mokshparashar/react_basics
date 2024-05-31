function Button(props) {
 
  return (
    <>
      <button onClick={() => props.setHideFunc(true)}>Button</button>
    </>
  );
}

export default Button;
