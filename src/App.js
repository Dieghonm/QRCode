import React from "react";
import "./style/App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

