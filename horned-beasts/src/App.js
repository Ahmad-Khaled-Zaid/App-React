import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from '../assest/data.json'

import React from 'react';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer'
import DataModel from './components/DataModel';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }

  }
  handleClose = () => {
    this.setState({ show: !this.state.show })

  }
  render() {
    return (
      <div>
        <Header />
        <Main handleClose={this.handleClose}/>
        <Footer />
        <DataModel show={this.state.show} />
      </div>











    )
  }
}

export default App;
