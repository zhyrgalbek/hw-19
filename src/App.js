import { Component } from 'react';
import './App.css';
import InputUser from './Components/InputUser';
import UserList from './Components/UserList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      usersArr: []
    }
  }

  addUser(user){
    this.setState((prev)=>{
      return {
        usersArr: [...prev.usersArr, {
          id: Math.random().toString(),
          name: user,
        }]
      }
    })
  }

  deleteUser(id){
    this.setState((prev)=>{
      return {
        usersArr: prev.usersArr.filter((elem)=>{
          return elem.id !== id;
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <InputUser accepted={this.addUser.bind(this)} />
        <UserList users={this.state.usersArr} deleteUser={this.deleteUser.bind(this)} />
      </div>
    )
  }
}

export default App;
