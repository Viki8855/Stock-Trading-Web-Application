import React from 'react';

function Rightsection({imageURL, productName, productDesription, learnmore}) 
{
  return (
    <div className='container mt-5'>
            <div className='row '>
            
                    <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        
                        <a href={learnmore}>Learn More</a>
                    </div> 
                    </div>
                  <div className='col-6 '>
                    <img src={imageURL} />
                </div>  
                </div>
            </div>
        
  );
}

export default Rightsection;