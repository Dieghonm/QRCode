import { useState } from "react";
import QRCode from "react-qr-code";


function QRCodeGen() {
  const [input, setInput] = useState('')
  const style = {
    display: "flex",
    flexDirection: 'column',
    margin: '5em'
  }
  
  return (
    <div style={style}>
      <textarea
        placeholder='Digite aqui'
        onChange={(e) => setInput(e.target.value)}
      />
      <QRCode
        value={input}
      />
    </div>
  );
}

export default QRCodeGen;