import React from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
class Form extends React.Component {

    handleSelect = (event) => {
        console.log(event.target.value);
    }


    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"   >
                    Number Of Horns
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.handleSelect} href="#/action-1" >1</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleSelect} href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleSelect} href="#/action-3">3</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleSelect} href="#/action-3">100</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default Form;