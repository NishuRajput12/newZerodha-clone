
import React from 'react';
 function Pricing(){
    return(
        <div className='container  p-3'>
        <div className='row  p-5'> 
             <div className='col-6  p-5'>
            <h1 className='mb-3 fs-2'> Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href=""style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a></div>
             <div className='col-6  '>
              <div className='row text-center'>
                <div className='col p-3 border'>
                   <h1 className='mb-3'style={{color:"orange"}}>₹0</h1>
                   <p> Free account<br/>
                   opening</p>
                </div>
                <div className='col p-3 border'>
                <h1 className='mb-3 ' style={{color:"orange"}}>₹0</h1>
                   <p>Free equity delivery<br/>
                   and direct mutual funds </p>
              </div>
              <div className='col p-3 border'>
              <h1 className='mb-3'style={{color:"orange"}}>₹20</h1>
              <p> Intraday and<br/> F&O</p>
              </div>
              </div>
              </div>
             </div>
             </div>
          

    

    );
 }
 export default Pricing;