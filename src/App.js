
import './App.css';
import {NavBar} from "./component/NavBar";
import {Banner} from "./component/Banner";
import {Skills} from "./component/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner />
        <Skills/>
    </div>
  );
}

export default App;
