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

    addVotes = () => {
        this.setState({
            votes: this.state.votes + 1

        })
    }
    render() {


        return (
            <div>
                {JsonData.map((data) => {
                    return (

                        <div>
                            {/* <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <img src={data.image_url} alt="" onClick={this.addVotes} />
                            <h1>{this.state.votes} ❤️</h1> */}

                            <Card style={{ width: '90rem'} }>
                                
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                    {data.description}
                                    </Card.Text>
                                    <Card.Title>
                                    {this.state.votes} ❤️
                                    </Card.Title>
                                    <Card.Img variant="top" src={data.image_url} onClick={this.addVotes} />
                                    
                                </Card.Body>
                            </Card>
                        </div>

                    )
                })}

            </div>


        )







    }

}

// console.log(this.addVotes);


export default HornedBeasts;

