import React from 'react'
import Global from "./Global";
import Card from "./Card";
import Globalarray from "./Globalarray";

const Service = () => {
  return(
    <>
      <div className="my-5">
        <h1 className="text-center"> Courses </h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

              {
                Globalarray.map((val,index) =>{
                  return <Card imgsrc={val.imgsrc}
                                title={val.title}
                                detail={val.detail}
                                buttontitle={val.buttontitle}
                          />
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
