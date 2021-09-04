import React from 'react';
import Card from 'react-bootstrap/Card';



class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vote: 0
        }
    }

    addVotes = () => {
        this.setState({
            vote: this.state.vote + 1
        })
    }
    alertModal = () => {
        this.props.displayModal(this.props.title)
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} onClick={this.alertModal}>
                    <Card.Img variant="top" src={this.props.imageUrl} onClick={this.addVotes} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            ❤️   {this.state.vote}
                        </Card.Text>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default HornedBeasts;


