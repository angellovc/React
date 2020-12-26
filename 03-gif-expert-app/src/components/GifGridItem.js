import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card-image animate__animated animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem

