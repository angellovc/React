import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ saludo, subtitle }) => {

  return (
    <Fragment >
      <h1>{saludo}</h1>
      <p>{subtitle}</p>
    </Fragment>
    );
}

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
  subtitle: 'im a subtitle'
}
export default FirstApp;