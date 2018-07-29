import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultFooter = (props) => {
    return (
      <React.Fragment>
        <span>&copy; 2018.</span>

      </React.Fragment>
    );
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
