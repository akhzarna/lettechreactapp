import React, {useState} from 'react'
import myImg from "../src/images/ios.jpg";
import Global from "./Global";

const Contact = () => {

  const [data, setData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    number:'',
  });

  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setData((preVal)=>{
      return{
          ... preVal,
          [name] : value,
      };
    });
  };

  const formSubmit = () =>{

  }

  return(
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="firstname"
                  value={data.firstname}
                  onChange={InputEvent}
                  placeholder="First Name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="lastname"
                  value={data.lastname}
                  onChange={InputEvent}
                  placeholder="Last Name"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Contact
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Contact"
                />
              </div>

              <div className="col-12 text-center">
              <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
