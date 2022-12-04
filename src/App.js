import { useState } from 'react';
import './App.css';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';
import QRcode from './AppQRcode/QRcode';



function App() {
 
 
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='out'>
      <section className="navbar">
          <div className="logo">
            <h1>URL <span>&</span> QRCode</h1>
          </div>

          <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">Contact</a></li>
                

          </ul>
      </section>
      <header>
        <div className='header-info'>
          <h1> </h1>
              <p>      

           


                </p>
          </div>
      </header>
      
      <body>
             
               <div className="container">
                  <div className='container-box'>
                  <InputShortener setInputValue={setInputValue} />
                  <LinkResult  inputValue ={inputValue}/>
                  
                  </div>
                  <div className='container-box'>
                  <QRcode/>
                  </div>
              </div>
      </body>
      <footer>
        <p> @Tumkitchapon </p>



      </footer>

   </div>
      


  );
}

export default App;
