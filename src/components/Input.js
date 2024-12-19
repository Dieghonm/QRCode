import React, { useState } from "react";
import image4 from "../svg/image4.png";
import image5 from "../svg/image5.png";
import image6 from "../svg/image6.png";
// import { QRCodeSVG } from "qrcode.react";  // Usando QRCodeSVG
import "../style/Input.css";

function Input({ onTextChange }) {
  const [urlValue, setUrlValue] = useState("");
  const [textValue, setTextValue] = useState("");
  // const [ssid, setSsid] = useState("");  // Estado para SSID
  // const [password, setPassword] = useState("");  // Estado para senha

  const handleURLClick = () => {
    onTextChange(urlValue);
  };

  const handleTextClick = () => {
    onTextChange(textValue);
  };

  // // Formato do QR Code para Wi-Fi
  // const wifiQR = `WIFI:T:WPA2;S:${ssid};P:${password};;`;

  return (
    <div className="inputs-box">
      <div className="input-card">
        <img src={image5} alt="URL icon" className="input-icon" />
        <div className="input-text">
          <label className="custom-label">Paste You're <span>URL</span> Here</label>
          <input
            className="input-url-box"
            type="url"
            value={urlValue}
            onChange={(e) => setUrlValue(e.target.value)}
          />
          <img src={image4} className="generate-button" alt="Generate button" onClick={handleURLClick} />
        </div>
      </div>

      <div className="input-card">
        <img src={image6} alt="message icon" className="input-icon-text" />
        <div className="input-text">
          <label className="custom-label">Paste You're <span>Text</span> Here</label>
          <textarea
            className="input-text-box"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <img src={image4} className="generate-button" alt="Generate button" onClick={handleTextClick} />
        </div>
      </div>

      {/* Novo card para gerar QR Code de Wi-Fi
      <div className="input-card">
        <div className="input-text">
          <label className="custom-label">Enter Wi-Fi SSID</label>
          <input
            className="input-url-box"
            type="text"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
          />
        </div>
        <div className="input-text">
          <label className="custom-label">Enter Wi-Fi Password</label>
          <input
            className="input-url-box"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="qrcode-container">
          <QRCodeSVG value={wifiQR} />
        </div>
      </div> */}
    </div>
  );
}

export default Input;



