import React from 'react'
import './App.css'

const Footer = () => {
    return (<>
         
 
  <footer className=" footer  text-white text-center text-lg-start ">
     
    <div  className="container    ">
      <div  className="d-flex  flex-row justify-content-between mt-2 ">
      <div>
      <h4 className=" query     ">
              For Queries Contact
            </h4>
            <h6>
              Event Co-ordinators &#129125;
            </h6>
            <h6>tantrahelp@iiitn.ac.in</h6>
      </div>
      <div>
          <h4 className="query ">
              Our Sponsers
          </h4>
          <div className="d-flex flex-row">
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          </div>
      </div>
       </div>
        <div  className="d-flex flex-row justify-content-between  mt-1">
          <div className="d-flex  flex-column">
          <h4  className=" query       ">Follow us</h4>
          <div className="d-flex  ">
          <a type="button" className="btn btn-primary btn-floating m-1" href="#!" role="button"  ><i  className="fab fa-facebook-f"></i></a>

         
            <a className="btn btn-primary btn-floating m-1" href="#!" role="button "> <i  className="fab fa-twitter"></i></a>

           
             

           
            <a
                className="btn btn-primary btn-floating m-1"
               style={{backgroundcolor:" #ac2bac"}}
               href="#!"
               role="button"
               ><i  className="fab fa-instagram"></i></a>

            
           
              
          </div>
          <h6>
                   Connect with us here
               </h6>

              

          </div>
          <div>
          <h4 className="query  mt-3 ">
              Our  Co-Sponsers
          </h4>
          <div className="d-flex flex-row">
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          </div>
      </div>
          </div>
         
          

           
         
        
 
 
        
         

           
           
          
        </div>
        
      
     
   
    
    
  </footer>
 
 
    </>
      
    )
}

export default Footer
