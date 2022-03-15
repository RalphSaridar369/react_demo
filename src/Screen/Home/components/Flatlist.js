import React from 'react';
import './Flatlist.scss';

const Flatlist = (props) => {
  return (
    <div className='flatlist'>
        <h1 className='flatlist__header'>{props.title}</h1>
    </div>
  )
}

export default Flatlist