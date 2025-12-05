import React from "react";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
  function handleSigninSubmit(values) {
    console.log("Signin form values:", values);
  }

  function handleSignupSubmit(values) {
    console.log("Signup form values:", values);
  }

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px" }}>
      <h1>Forms demo</h1>

      <div
        style={{
          marginBottom: "32px",
          borderBottom: "1px solid #eee",
          paddingBottom: "24px",
        }}
      >
        <Signin onSubmit={handleSigninSubmit} />
      </div>

      <div>
        <Signup onSubmit={handleSignupSubmit} />
      </div>
    </div>
  );
}

export default App;
