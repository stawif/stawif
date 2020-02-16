import React, { Component } from 'react';
import './App.css';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state= {
      name: 'Riddhesh jangid',
      teamList: []
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/list/')
    .then(res => res.json())
    .then(json => {
      this.setState({teamList: json});
      console.log("These are names : "+this.state.teamList[0].name);
    });
  } 

  render(){
  return (
    <div className="App">
      <h2>stawif</h2>
      {this.state.teamList.map(
        (list,i) => (<p>{list.name}</p>)
      )}
    </div>
  );
  }
}

export default App;
