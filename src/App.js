import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Crisio'
  }

  changeUsernameHandler = (event) =>{
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <UserInput style={style} name={this.state.username} changed={this.changeUsernameHandler}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name="Gina"/>
        <UserOutput name="Calvin"/>
      </div>
    );
  }
}

export default App;
