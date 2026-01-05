import React, { useState, useMemo } from "react";
import TextInput from "../common/TextInput/TextInput";

function Signup(props) {
  const { onSubmit } = props;

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const isMale = useMemo(() => gender === "male", [gender]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: name,
      nickname: nickname,
      email: email,
      gender: gender,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    if (typeof onSubmit === "function") {
      onSubmit(formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>

      <TextInput
        label="Имя"
        name="name"
        placeholder="Введите имя"
        required={true}
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
      />

      <TextInput
        label="Ник"
        name="nickname"
        placeholder="your_nickname"
        required={true}
        icon="@"
        value={nickname}
        onChange={function (event) {
          setNickname(event.target.value);
        }}
        description="Ник должен начинаться с @ (по умолчанию)."
      />

      <TextInput
        label="Почта"
        type="email"
        name="email"
        placeholder="you@example.com"
        required={true}
        value={email}
        onChange={function (event) {
          setEmail(event.target.value);
        }}
      />

      <div style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "4px", fontSize: "14px", fontWeight: 500 }}>
          Пол
        </div>

        <label style={{ marginRight: "12px", fontSize: "14px" }}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={isMale}
            onChange={handleGenderChange}
          />
          <span style={{ marginLeft: "4px" }}>Мужской</span>
        </label>

        <label style={{ fontSize: "14px" }}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={!isMale}
            onChange={handleGenderChange}
          />
          <span style={{ marginLeft: "4px" }}>Женский</span>
        </label>
      </div>

      <TextInput
        label="Пароль"
        type="password"
        name="password"
        placeholder="Придумайте пароль"
        required={true}
        value={password}
        onChange={function (event) {
          setPassword(event.target.value);
        }}
      />

      <TextInput
        label="Повторить пароль"
        type="password"
        name="passwordConfirm"
        placeholder="Повторите пароль"
        required={true}
        value={passwordConfirm}
        onChange={function (event) {
          setPasswordConfirm(event.target.value);
        }}
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default Signup;
