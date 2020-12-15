import React from 'react'
import '../index.css';

const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card-image animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
