import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home-page/Home';
import Details from './components/Details-page/Details';

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/details">
              <Header/>
              <Details/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch> 
      </div>
    </Router>
  );
}

export default App;
