import React, { useState } from "react";
import image1 from "../svg/image1.png";
import image4 from "../svg/image4.png";
import WWWW_ICON from "../svg/WWW_ICON.png";
import Text_ICON from "../svg/Text_ICON.png";
import WIFI_ICON from "../svg/WIFI_ICON.png";

import "../style/Input.css";

function Input({ onTextChange }) {
  const MAX_QR_LENGTH = 280;

  const [urlValue, setUrlValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [activeInput, setActiveInput] = useState("text");
  const handleURLClick = () => {
    onTextChange(urlValue);
  };

  const handleTextClick = () => {
    onTextChange(textValue);
  };

  const handleTextChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= MAX_QR_LENGTH) {
      setTextValue(inputValue);
      setTextLength(inputValue.length);
    }
  };

  return (
    <div className="inputs-box">
      <div className="icons-box">
          <div className="button-container">
            <img
              src={WWWW_ICON}
              alt="URL icon"
              className={`input-icon ${activeInput === "url" ? "active" : ""}`}
              onClick={() => setActiveInput("url")}
            />
            <img
              src={Text_ICON}
              alt="Text icon"
              className={`input-icon ${activeInput === "text" ? "active" : ""}`}
              onClick={() => setActiveInput("text")}
            />
            <img
              src={WIFI_ICON}
              alt="WiFi icon"
              className={`input-icon ${activeInput === "wifi" ? "active" : ""}`}
              onClick={() => setActiveInput("wifi")}
            />
          </div>
        <img src={image1} alt="Logo"  className="Logo-icon"/>
      </div>
      

      {/* Input para URL */}
      {activeInput === "url" && (
        <div className="input-card">
          <div className="input-text">
            <label className="custom-label">
              Paste Your <span>URL</span> Here
            </label>
            <input
              className="input-url-box"
              type="url"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
            />
            <img
              src={image4}
              className="generate-button"
              alt="Generate button"
              onClick={handleURLClick}
            />
          </div>
        </div>
      )}

      {/* Input para Texto */}
      {activeInput === "text" && (
        <div className="input-card">
          <div className="input-text">
            <label className="custom-label">
              Paste Your <span>Text</span> Here
            </label>
            <textarea
              className="input-text-box"
              value={textValue}
              onChange={handleTextChange}
              placeholder={`Max. ${MAX_QR_LENGTH} characters`}
            />
            <div className="text-counter">
              {textLength}/{MAX_QR_LENGTH} characters
            </div>
            <img
              src={image4}
              className="generate-button"
              alt="Generate button"
              onClick={handleTextClick}
            />
          </div>
        </div>
      )}

      {/* Input para WiFi */}
      {activeInput === "wifi" && (
        <div className="input-card">
          <div className="input-text">
            <label className="custom-label">
              Enter Your <span>WiFi Details</span>
            </label>
            <input
              className="input-url-box"
              type="text"
              placeholder="WiFi SSID"
            />
            <input
              className="input-url-box"
              type="password"
              placeholder="WiFi Password"
            />
            <img
              src={image4}
              className="generate-button"
              alt="Generate button"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Input;
