import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees"

function App() {
  return (
    <div>
        <Header />
        <Wrapper>
          <Employees></Employees>
        </Wrapper>
        <Footer />
    </div>
  );
}

export default App;