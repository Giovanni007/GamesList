import React, {Component} from 'react';
import './App.css';
import Games from './components/games';
import Header from './components/Header';
import FormDialog from './components/addGame';

import { Container, Button} from 'react-floating-action-button'

class App extends Component {
  constructor(props){
    super(props);
    this.fetchGames = this.fetchGames.bind(this);
  }
  render() {
      return (
        <div>
          <Header></Header>
          <Games games={this.state.games} />
          <FormDialog onGameAdd={this.fetchGames}></FormDialog>   
        </div>
        
      )
  }

  state = {
      games: [],
  };

  fetchGames(){
    fetch('http://localhost:8080/games/')
    .then(res => res.json())
    .then((data) => {
        this.setState({ games: data });
    })
    .catch(console.log)
};

  componentDidMount() {
    this.fetchGames();
  }
};


export default App;

