import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SearchInput from "./components/SearchInput";
import Results from "./components/Results";

function App() {
  return (
    <div>
        <Header />
        <Wrapper>
          <SearchInput></SearchInput>
          <Results></Results>
        </Wrapper>
        <Footer />
    </div>
  );
}

export default App;