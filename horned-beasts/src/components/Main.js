import React from 'react';
import HornedBeasts from './HornedBeasts';
import JsonData from '../assest/data.json'
class Main extends React.Component {
  render() {
    const picturesCollection = JsonData.map(data => {
      return (
        <HornedBeasts
        handleClose={this.props.handleClose}
          image_url={data.image_url}
          title={data.title}
          description={data.description}
        />)
    })
    return (
      <main>
        {
          picturesCollection
        }

      </main>

    )
}
}
export default Main;


{/* <HornedBeasts title="UniWhal" image="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="A unicorn and a narwhal nuzzling their horns"/>
           <HornedBeasts title="Rhino Family" image="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="Mother (or father) rhino with two babies"
           />
            <HornedBeasts title="Unicorn Head" image="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description="" /> */}