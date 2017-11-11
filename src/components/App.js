import React, { PureComponent } from 'react';
//Components 
import Navbar from './organisms/Navbar';
//Pages Navigation
import Router from "./Router";

class App extends PureComponent {
  componentDidMount(){
    //console.log(this.getData().then(data => console.log(data)));
  }
  getData = async () => {
      const res = await fetch('http://127.0.0.1:8000/api/v1/articles');
      const data = await res.json();
      return data
  };
  render() {
    return (
      <div className={this.props.className}>
        <Navbar/>  
        <div className="container">
          <Router/>
        </div>
      </div>
    );
  }
}

export default App;
