import { useState } from "react";
import QRCode from "react-qr-code";


function QRCodeGen() {
  const [input, setInput] = useState('')
  const [qrText, setQrText] = useState('')
  const style = {
    display: "flex",
    flexDirection: 'column',
    margin: '2em 20em',
    border: '5px solid black',
    width: '420px',

  }
  
  return (
    <div style={style}>
      <h3 style={{margin: '5px 100px'}}>Gerador de QR Code</h3>
      <textarea
        style={{width: '400px', height:'100px', margin: '5px'}}
        placeholder='Digite aqui'
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        style={{width: '400px', margin: '5px'}}
      onClick={() => setQrText(input)}>Gerar QR Code</button>
      <QRCode
              style={{margin: '5px 10px 10px 70px'}}
        value={qrText}
      />
    </div>
  );
}

export default QRCodeGen;