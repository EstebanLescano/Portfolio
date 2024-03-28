import logo from './assets/img/logo.svg';
import './App.css';
import {NavBar} from "./component/NavBar";
import {Banner} from "./component/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner />
    </div>
  );
}

export default App;
