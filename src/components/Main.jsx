import React from "react";
import Presentation from "./Presentation";
import Testimony from "./Testimony";
import Form from "./Form";

function Main() {
  return (
    <main className="w-screen">
      <Presentation />
      <Testimony />
      <Form />
    </main>
  );
}

export default Main;
