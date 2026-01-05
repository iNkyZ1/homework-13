import React, { useState } from "react";
import TextInput from "../common/TextInput/TextInput";

function Signin(props) {
  const { onSubmit } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    if (typeof onSubmit === "function") {
      onSubmit(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign in</h2>

      <TextInput
        label="Email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required={true}
        value={email}
        onChange={function (event) {
          setEmail(event.target.value);
        }}
      />

      <TextInput
        label="Password"
        type="password"
        name="password"
        placeholder="Your password"
        required={true}
        value={password}
        onChange={function (event) {
          setPassword(event.target.value);
        }}
      />

      <button type="submit">Войти</button>
    </form>
  );
}

export default Signin;
