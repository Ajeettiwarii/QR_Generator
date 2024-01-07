import { useState } from "react";
import QrCode from "react-qr-code"  
import "./App.css"
function QR_generator(){ 
    const[qrcode,setqrcode]=useState('') 
    const[input,setinput]=useState('') 
    function handlegenerateqrcode(){
        setqrcode(input)  
         setinput('')
    }
    return(
        <> 
                  <div className="makingqr">
                        <h1 className="qr">QR Code Generator</h1> 
                         <div className="makingqr1">
                            <input  className="qr1"  onChange={(e)=>setinput(e.target.value)} type="text"  name ="qr-code" placeholder="Enter your value here" value={input}/> 
                             <button  className="qr2"  disabled={input && input.trim()!==''?false:true} onClick={handlegenerateqrcode}>Generate</button>
                         </div> 
                           <div className="makingqr2">
                              <QrCode id="qr-code-value" value={qrcode} size={300} bgColor="#fff" className="qr3"/>
                           </div>
                  </div> 
                
        </>
    )
}  
export default QR_generator;