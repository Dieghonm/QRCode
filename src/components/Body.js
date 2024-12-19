import React, { useState } from "react";
import Input from "./Input";
import Sidebar from "./Sidebar";

import "../style/Body.css"

function Body() {
  const [textData, setTextData] = useState(""); 
  const handleTextChange = (data) => {
    setTextData(data);
  };

  return (
    <main className="body">
      <Input onTextChange={handleTextChange} />
      <Sidebar textData={textData} />
    </main>
  );
}

export default Body;

