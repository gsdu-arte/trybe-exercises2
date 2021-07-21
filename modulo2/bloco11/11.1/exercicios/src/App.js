import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Levantar', 'Tomar café', 'Escovar os dentes', 'Estudar'];

function App() {
  return (
    <ul>{tasks.map((actions) => Task(actions))}</ul>
  );
}

export default App;
