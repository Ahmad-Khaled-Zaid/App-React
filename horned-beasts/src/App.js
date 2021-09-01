import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import JSONDATA from './assest/data.json';
import DataModal from './components/DataModel';

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
    console.log(selectedBeast2);
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