import './App.css';
import HomePage from "./components/HomePage";
import Yaprakbaskisi from "./components/Yaprakbaskisi";
import Patatesbaskisi from "./components/Patatesbaskisi";
import Ipbaskisi from "./components/Ipbaskisi";
import Tasbaskisi from "./components/Tasbaskisi";
import Agacbaskisi from "./components/Agacbaskisi";
import Linolyumbaskisi from "./components/Linolyumbaskisi";
import Navigationbar from "./components/Navigationbar";
import Guessgame from "./components/Guessgame";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" >

      <Router>
        <Navigationbar />
        <Route path="/homepage" component={HomePage}></Route>
        <Route path="/yaprakbaskisi" component={Yaprakbaskisi}></Route>
        <Route path="/patatesbaskisi" component={Patatesbaskisi}></Route>
        <Route path="/ipbaskisi" component={Ipbaskisi}></Route>
        <Route path="/tasbaskisi" component={Tasbaskisi}></Route>
        <Route path="/agacbaskisi" component={Agacbaskisi}></Route>
        <Route path="/linolyumbaskisi" component={Linolyumbaskisi}></Route>
        <Route path="/guessgame" component={Guessgame}></Route>

      </Router>

    
    </div>
  );
}
export default App;



