import React from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees"

function App() {
  return (
    <div>
        <Header />
        <Wrapper>
          <Employees></Employees>
        </Wrapper>
    </div>
  );
}

export default App;