
import React from 'react';
 function Brokerage(){
    return(
        <div className="container ">
        <div className="row p-3 text-center   text-left mt-4 ">
            <div className="col-8 p-4 x ">
             <a href=""style={{textDecoration:"none"}}><h1 className='fs-5'>Brokerage calculator</h1></a>
            <ul className='text-muted mt-5' style={{textAlign:"left",lineHeight:"1.9",fontSize:"14px"}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

                

            </ul>
            </div>
            <div className="col-4 p-4 ">
            <a href="" style={{textDecoration:"none"}}><h1 className='fs-5'>List of charges</h1></a>
          </div>
        </div>
      </div>
    );
 }
 export default Brokerage;