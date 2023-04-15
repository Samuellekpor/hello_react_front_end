import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

function Greeting({ greeting, fetchGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      {greeting && <h2>{greeting.message}</h2>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    greeting: state.greeting,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGreeting: () => dispatch(fetchGreeting()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
