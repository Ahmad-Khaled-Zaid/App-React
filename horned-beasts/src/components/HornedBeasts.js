import React from 'react';
import Card from 'react-bootstrap/Card'
import JsonData from '../assest/data.json'
class HornedBeasts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            votes: 0,

        }
    }

    addVotes = (event) => {
        this.setState({
            votes: this.state.votes + 1

        })
        this.props.handleClose();
    }
    render() {


        return (
            <div>



                <div>


                    <Card style={{ width: '90rem' }}>

                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Card.Title>
                                {this.state.votes} ❤️
                            </Card.Title>
                            <Card.Img variant="top" src={this.props.image_url} onClick={this.addVotes} />

                        </Card.Body>
                    </Card>
                </div>

                    
              }

            </div>


        )







    }

}

export default HornedBeasts;

