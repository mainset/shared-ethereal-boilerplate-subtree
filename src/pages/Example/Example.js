import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';

import { fetchWelcomeData, selectWelcomeData } from 'store';

class Example extends Component {
  componentWillMount() {
    this.props.actions.fetchWelcomeData();
  }

  render() {
    const { welcome } = this.props;
    return (
      <div className="example-container">
        <div>
          Your IP is:
          {welcome.get('origin')}
        </div>
        <br />
        <Link to="/">Back to home page</Link>
      </div>
    );
  }
}

Example.propTypes = {
  actions: PropTypes.object.isRequired,
  welcome: PropTypes.instanceOf(Map), // eslint-disable-line react/require-default-props
};

const mapStateToProps = (state) => ({
  welcome: selectWelcomeData(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchWelcomeData }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
