import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";
import './LinkResult.css'
const LinkResult = ({inputValue}) => {  

 
  const [shortenLink,setShortenLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchData = async () => {
    try {
      setLoading(true);
     
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
      
  

    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
  
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {

    return <div class="spinner-border text-warning"></div>
  }
  if(error) {
    return <p className="noData">Something wne t wrong :</p>
  }
  return (
    <div>
    <div className="contranner">    
      {shortenLink && (
        <div className="result">
          <p>
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button  type="button" class="btn btn-dark" >Copy</button>
          </CopyToClipboard>
  
          </p>
          
        </div>
        
      )}
   <h6>URL : {inputValue}</h6> 
   <h6>Short-URL : {shortenLink}</h6>
    
    </div>

   
    </div>

    
  )
}

export default LinkResult