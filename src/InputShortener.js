import { useState } from "react"
import './inputShortener.css'


const InputShortener = ({ setInputValue}) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>URL-<span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="    Link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button type="button" class="btn btn-dark" onClick={handleClick}>Transform</button>
      </div>
    </div>
  )
}

export default InputShortener