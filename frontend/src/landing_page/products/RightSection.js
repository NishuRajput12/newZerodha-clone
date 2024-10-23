
import React from 'react';

    function RightSection({imageURL,productName,productDescription,learnMore}){
        return(
            <div className="container">
            <div className="row p-5">
            <div className="col-6 p-5  p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
            </div>
            <a href={learnMore} className=' text-decoration-none fs-6'> Learn More→</a>
            </div>
            <div className="col-6 ">
            <img src={imageURL} />
            </div>
            </div>
         </div>
    );
 }
 export default RightSection;