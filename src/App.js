import './App.css';
import Navbar from './Form pages/Navbar';
import SignUp from './Form pages/signUp';
import SignIn from './Form pages/signIn';
import ForgotPassword from './Form pages/ForgotPassword';
import ResetPassword from './Form pages/ResetPassword';
import Admin from './Admin Page/Admin';
import EditData from './Admin Page/EditData';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Switch>

      <Route exact path="/">
        <Navbar />
        <SignUp />
        </Route> 

<Route path="/signUp">
        <Navbar />
        <SignUp />
        </Route> 

        <Route path="/signIn">
        <Navbar />
        <SignIn />
        </Route>
        
        <Route path="/forgot">
        <Navbar />
        <ForgotPassword />
        </Route>

        <Route path="/reset">
        <Navbar />
        <ResetPassword />
        </Route>

        <Route path="/admin">
        <Navbar />
        <Admin />
        </Route>

        <Route path="/editAdmin">
        <Navbar />
        <EditData />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
