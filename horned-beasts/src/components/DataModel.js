import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class DataModel extends React.Component {
  render() {

    return (
      <div>
      <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header>
              <Modal.Title>{this.props.title}</Modal.Title>
              <span className="close" onClick={this.props.close}>;
              </span>
          </Modal.Header>

          <Modal.Body>
              <Card style={{ width: "100%" }} >
                  <Card.Img
                      src={this.props.selectedBeast.image_url}
                     
                  />
                  <Card.Body>
                      <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                      <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                  </Card.Body>
              </Card>
          </Modal.Body>

          <Modal.Footer>
              <Button variant="secondary" onClick={this.props.close}>
                  Close
              </Button>
          </Modal.Footer>
      </Modal>
  </div>


    )
  }

}

export default DataModel;