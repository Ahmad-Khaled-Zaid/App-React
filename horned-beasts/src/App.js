import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import JSONDATA from './assest/data.json';
import DataModal from './components/DataModel';
import Form from './components/Form'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: JSONDATA,
      showModel: false
    }
  }
  alertModal = (title) => {
    const selectedBeast2 = JSONDATA.filter((item)  => { 
      return (item.title === title);
    });
    this.setState({
      showModel: true,
      selectedBeast: selectedBeast2[0],
    })
  }
  closeModal = () => {
    this.setState({
      showModel: false
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Form />
        <br></br><br></br><br></br>
        <Main  HornedData={JSONDATA} displayModal={this.alertModal}  />
        <DataModal
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModel}
          close={this.closeModal}
        />
        <Footer />
       
      </div>
    )
  }
}
export default App;