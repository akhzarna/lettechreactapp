import React from 'react';

import upwork from "../src/images/upwork.jpg";
import reactjs from "../src/images/reactjs.jpg";
import reactnative from "../src/images/reactnative.jpg";
import freelancer from "../src/images/freelancer.jpg";
import youtube from "../src/images/youtube.jpg";
import xcode from "../src/images/xcode.jpg";

const Card = (props) => {

  return(
<>
  <div className="col-md-4 col-10 mx-auto">
    <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.detail}</p>
          <a href="#" className="btn btn-primary">{props.buttontitle}</a>
        </div>
    </div>
  </div>
</>
    );
  };

export default Card;
