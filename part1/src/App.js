import './App.css';
import Message from './Messaje';

const Description = () => {
  return <p>I'm from Mars and I'm here to teach you this new language</p>
}

const App = () => {
  return (
    <div className="App">
      <Message color="blue" message="We are learning" />
      <Message color="purple" message="React"/>
      <Message color="red" message="today"/>
      <Description />
    </div>
  );
}

export default App;
