import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/Not found/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/service">
          <Service></Service>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
