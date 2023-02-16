
import './App.css';

import NavBar from "./components/NavBar/NavBar";
import Element from './components/Element/Element';

function App() {
  return (
    <div>
        <NavBar />
        <Element src="http://placekitten.com/g/200/300" alt="gato" />
        <Element src="https://placedog.net/200/300" alt="perro" />
        <Element src="http://placekitten.com/g/200/300" alt="gato" />
    </div>
  );
}

export default App;
