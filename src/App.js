import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGreeting } from './actions/greetingActions';
import Greeting from './components/Greeting';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <Router>
      <Route exact path="/" component={Greeting} />
    </Router>
  );
}

export default App;
