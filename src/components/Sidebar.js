import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../style/Sidebar.css";

import image1 from "../svg/image1.png";
import image3 from "../svg/image3.png";

function Sidebar({ textData }) {
  const [colorOption, setColorOption] = useState(1);
  const qrRef = useRef();


  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const imageUrl = canvas.toDataURL("image/png");


    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "qrcode.png";
    link.click();
  };


  const colorOptions = {
    1: { fgColor: "#000000", bgColor: "#FFFFFF" },
    2: { fgColor: "#FF5733", bgColor: "#F0F0F0" },
    3: { fgColor: "#0000FF", bgColor: "#FFFFFF" },
    4: { fgColor: "#008000", bgColor: "#F0F0F0" },
    5: { fgColor: "#FF0000", bgColor: "#FFFFFF" },
  };

  return (
    <div className="sidebar-container">
      <div className="colors-box">
        </div>
      <div className="qr_box">
        <img src={image1} alt="Logo"  className="Logo"/>
        <div className = "color-palette">
          <div
            onClick={() => setColorOption(1)}
            className={`color-box ${colorOption === 1 ? "selected" : ""}`}
            style={{ backgroundColor: "#000000" }}
          />
          <div
            onClick={() => setColorOption(2)}
            className={`color-box ${colorOption === 2 ? "selected" : ""}`}
            style={{ backgroundColor: "#FF5733" }}
          />
          <div
            onClick={() => setColorOption(3)}
            className={`color-box ${colorOption === 3 ? "selected" : ""}`}
            style={{ backgroundColor: "#0000FF" }}
          />
          <div
            onClick={() => setColorOption(4)}
            className={`color-box ${colorOption === 4 ? "selected" : ""}`}
            style={{ backgroundColor: "#008000" }}
          />
          <div
            onClick={() => setColorOption(5)}
            className={`color-box ${colorOption === 5 ? "selected" : ""}`}
            style={{ backgroundColor: "#FF0000" }}
          />
        </div>
        <div ref={qrRef} className="qr-code-container">
          <QRCodeCanvas
            value={textData || "Digite algo..."}
            size={200}
            fgColor={colorOptions[colorOption].fgColor}
            bgColor={colorOptions[colorOption].bgColor}
          />
        </div>      
        <img src={image3} alt="Generate button" onClick={downloadQRCode} className = "download-button"/>

      </div>
    </div>
  );
}

export default Sidebar;
