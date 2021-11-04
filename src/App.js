import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';  
import Button from "./Components/Button/Button";
import ShowPrice from './Components/ShowPrice/ShowPrice';

// import Forms from './Components/Forms/Forms';
// import Page404 from './Components/404/404';
// import { Link } from 'react-router-dom';
// // import Modal from './Components/Modal/Modal'



function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path='/'>
          <Button/>
        </Route>
        <Route exact path='/showprice/:moneyName'>
        <ShowPrice/>
        </Route>
       
      </Switch>
      </div>
    </Router>
  );
}

// ReactDOM.render(<App counter={12000} />, document.getElementById("app"));

export default App;
