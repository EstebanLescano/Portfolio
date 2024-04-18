
import './App.css';
import {NavBar} from "./component/NavBar";
import {Banner} from "./component/Banner";
import {Skills} from "./component/Skills";
import {Proyects} from "./component/Proyects";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner />
        <Skills/>
        <Proyects/>
    </div>
  );
}

export default App;
