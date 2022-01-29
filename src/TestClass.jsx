
import React from 'react';

class TestClass extends React.Component {

  constructor(props){
    super(props);

    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          num: 0,
          flag:0
        };
  }

  MySecondButton=()=>{
  this.setState({num:this.state.num+1})
  }

  render() {

  return(
    <div>

    <h1> {this.state.num} </h1>
      <button onClick={this.MySecondButton}>
      My Second Button
      </button>

    </div>
    );
  }
}

export default TestClass;
