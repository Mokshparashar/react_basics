import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {
    console.log(text);
    console.log(email);
  }
  return (
    <div>
      <span>{text}</span>
      <br />
      <span>{email}</span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="email"
        name=""
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}
