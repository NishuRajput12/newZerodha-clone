import React from "react";
 function Team(){
    return(
        <div className="container">
        <div className='row  p-3 mb-5' >
         <h1 className="  text-center">People  </h1>
           </div>
           <div className="row p-5  " style={{lineHeight:"1.9",fontSize:"1.2em"}}>
           <div className="col-6 p-5 text-center">
           <img src='  media/images/nithinKamath.jpg' style={{width:'60%',borderRadius:"100%"}}></img>
     
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
           </div>
           <div className="col-6 p-5  " style={{fontSize:"18px"}}>
             <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
             </p>
               <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>
            <p>Playing basketball is his zen.</p>
                   <p>Connect on<a href=""className='text-decoration-none '>Homepage / TradingQnA / Twitter</a> </p>
          </div>
           </div>
         </div>
       );
    
 }
 export default Team;