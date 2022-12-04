import {useState} from 'react';

import'./Apphistory.css';

const emptyLink = {
    normallink: '', shortlink: ''
};

function Apphistory(inputValue,shortenLink) {
    // - States
    const [Link, setLink] = useState('');
    const [allLinks, setAllLinks] = useState([]); 


    //  const [inputValue1, setinputValue1] = inputValue;
    //  const [shortenLink1, setshortenLink1] = shortenLink;

    function onLinkValueChange(event) {
        const { name, value } = event.target;
        setLink((prevLink) => {
            return {
                ...prevLink,
                [name]: value
            };
        });
    }

    function onLinkSubmit() {
        console.log(inputValue)

        // Add Link
        setAllLinks((prevAllLinks) => {
            const newLink = { ...Link };
            newLink.id = Date.now().toString();
            return [newLink, ...prevAllLinks];
        });

        // Clear form
        setLink(emptyLink);
    }
    function onLinkDelete(LinkId){
            setAllLinks((prevAllLinks)=>{
            return prevAllLinks.filter((theLink)=>{
                  return theLink.id !== LinkId;
            
            });
        });
    }

   // - Elements
   const allLinksElements = allLinks.map((theLink) => {
    return (
        <div key={theLink.id} className="app-Link">
            <li><h7>{theLink.normallink}</h7></li>
            <li><h7>{theLink.shortlink}</h7></li>
            <p>
                <a onClick={() => {onLinkDelete(theLink.id)}}>Delete</a>
            </p>
        </div>
    );
});
    


    return (
 
        <section className="app-section">
            <div className="app-container">
                <form >
                {onLinkSubmit}
                </form>
                <div className="app-Links">
                    {allLinksElements}
                </div>
            </div>
     
        </section>
  
    );
}

export default Apphistory;