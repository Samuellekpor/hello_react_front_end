import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

function Greeting(props) {
  const { greeting, fetchGreeting } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGreeting().finally(() => setLoading(false));
  }, [fetchGreeting]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <h1>{greeting.message}</h1>;
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