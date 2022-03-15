import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Flatlist.scss';

const Flatlist = (props) => {
    
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div className='flatlist'>
        <h1 className='flatlist__header'>{props.title}</h1>
        <Carousel responsive={responsive} infinite ssr removeArrowOnDeviceType={["tablet", "mobile"]}>
            {props.data.map((item,index)=>{
                return <div key={index} className='flatlist__card'>
                    <img src={item.image} className='flatlist__image'/>
                    <p>{item.name}</p>
                    </div>
            })}
        </Carousel>
    </div>
  )
}

export default Flatlist