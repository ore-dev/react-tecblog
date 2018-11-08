import React from 'react';
import './Body.css'

  const Body =(props) =>{
   return(
     <div className="container-fluid">
      <div className="row">
        {props.children}
      </div>
    </div>
  );
};

export default Body;
