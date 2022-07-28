import './App.css';
import Navbar from './Form pages/Navbar';
import SignUp from './Form pages/signUp';
import SignIn from './Form pages/signIn';
import ForgotPassword from './Form pages/ForgotPassword';
import ResetPassword from './Form pages/ResetPassword';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
<Route path="/signUp">
        <SignUp />
        </Route> 

        <Route path="/signIn">
        <SignIn />
        </Route>
        
        <Route path="/forgot">
        <ForgotPassword />
        </Route>

        <Route path="/reset">
        <ResetPassword />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
