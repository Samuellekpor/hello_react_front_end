import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
