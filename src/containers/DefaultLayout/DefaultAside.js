import React from 'react';
import {TabPane} from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const DefaultAside = (props) => {
    return (
      <React.Fragment>
          <TabPane>
            <div className="aside-options">
              TEst2
            </div>
          </TabPane>
      </React.Fragment>
    );
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
