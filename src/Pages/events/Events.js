import React from 'react'
import "./Events.css"
import logo from "../events/logo.png"

const Events = () => {
    return (
        <div className="background">
            <h1 className="header">Speakers Line Up - Technical Talks</h1>
           <div className="combine_speaker">
            <div className="speaker" >
               <img src={logo} alt="Logo" />
          <div className="text">
              <h2>Jacob Robinson</h2>
              <h5>Product Designer @ Cred </h5>
              <p>Now that we’ve seen the three main uses of git checkout on branches, it's important to discuss the “detached HEAD” state. Remember that the HEAD is Git’s way of referring to the current snapshot. “detached HEAD” state.</p></div>  
              
               
            </div>
           
            <div className="speaker" >
               <img src={logo} alt="Logo" />
          <div className="text">
              <h2>Jacob Robinson</h2>
              <h5>Product Designer @ Cred </h5>
              <p>Now that we’ve seen the three main uses of git checkout on branches, it's important to discuss the “detached HEAD” state. Remember that the HEAD is Git’s way of referring to the current snapshot. “detached HEAD” state.</p></div>  
              
               
            </div>
           
            <div className="speaker" >
               <img src={logo} alt="Logo" />
          <div className="text">
              <h2>Jacob Robinson</h2>
              <h5>Product Designer @ Cred </h5>
              <p>Now that we’ve seen the three main uses of git checkout on branches, it's important to discuss the “detached HEAD” state. Remember that the HEAD is Git’s way of referring to the current snapshot. “detached HEAD” state.</p></div>  
              
               
            </div>
           
            
           
     
    </div>
  {/*<div class=" md:mx-auto bg-purple-700 text-center border-purple-700">
  If you don’t plan to use the container class in your project, you can disable it entirely by setting the container property to false in the corePlugins section of your config file
  </div>*/}
 

</div>
    )
}

export default Events
