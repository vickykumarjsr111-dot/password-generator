import './App.css';
import { useState } from 'react';


function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlength, setPasswordlength] = useState(10);
  let [fPass, setPass] = useState('');

  let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LC = "abcdefghijklmnopqrstuvwxyz";
  let NC = "0123456789";
  let SC = "!@#$%^&*()_+[]{}|;:,.<>?";

  let createPassword = () => {
    let finalPassword = "";
    let charset = "";

    if (uppercase || lowercase || numbers || symbols) 
    {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (numbers) charset += NC;
      if (symbols) charset += SC;

      for (let i = 0; i < passwordlength; i++) {
        finalPassword += charset.charAt(
          Math.floor(Math.random() * charset.length)
        );
      }

      setPass(finalPassword);
    } else {
      alert("Select at least one option");
    }
  };

  let copyPassword = () => {
    navigator.clipboard.writeText(fPass);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <div className="passwordBox">
        <p>Password Generator</p>

        <div className="passwordBoxin">
          <input type="text" value={fPass} readOnly />
          <button onClick={copyPassword}>Copy</button> 
        </div>

        <div className="passlength">
          <label>Password Length</label>
          <input
            type="number"
            min={10}
            max={20}
            value={passwordlength}
            onChange={(event) => setPasswordlength(event.target.value)}
          />
        </div>

        <div className="passlength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>

        <div className="passlength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button className="generateBtn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;