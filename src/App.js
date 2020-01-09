import React, { Component } from 'react';
import { getInfoOrSendInfo } from './helpers/services'
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Store from './assets/location.svg'
import Favorite from './assets/corazon.svg'
import MyBag from './assets/bolso.svg'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data_api: null,
      icons: null,
      isLoading:false
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true });
    let data_api = await getInfoOrSendInfo();
    let icons = [
      { name: 'Tiendas', icon: Store },
      { name: 'Lista de deseos', icon: Favorite },
      { name: 'Mi bolsa', icon: MyBag },
    ]
    this.setState({
      data_api : data_api.data.data,
      icons
    });
    this.setState({isLoading: false });
    console.log(this.state);
  }

  render(){
    return(
      this.state.isLoading ?
      <div className="App">
        <h1 className="loading_text"> Cargando... </h1>
      </div>
      :
      <div className="App">
        <Header icons={this.state.icons} items_menu={this.state.data_api} />
        <Body />
      </div>
    )
  }
}

export default App;
