import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Error from './Components/Error/Error'
import Login from './Components/Login/Login';
import CheckOut from "./Components/CheckOut/CheckOut"
import Orders from "./Components/Orders/Orders"
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
 
import AdminAddProduct from "./Components/AdminAddProduct/AdminAddProduct";
import AdminShowProduct from "./Components/AdminShowProduct/AdminShowProduct";
import { createContext, useState } from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

export const UserContext = createContext();

function App() {

   const [signedInUser,setSignedInUser]=useState({})
  return (
        <UserContext.Provider value={[signedInUser,setSignedInUser]}>
    <Router>    
      <Header></Header> 
      <Switch>        
        <Route exact path="/">          
            <Home></Home>
        </Route>
        <Route path="/Home">
            <Home></Home>
        </Route>
        <Route path="/Login">
            <Login></Login>
        </Route>
        <Route path="/About">
            <About></About>
        </Route>
        <PrivateRoute path='/AdminShowProduct'>
               <AdminShowProduct></AdminShowProduct>
          </PrivateRoute>
        <PrivateRoute path="/AdminAddProduct">
        
          <AdminAddProduct></AdminAddProduct>   
        </PrivateRoute>
         <PrivateRoute path='/CheckOut/:id'>
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path='/Orders'>
            <Orders></Orders>
          </PrivateRoute>
        <Route path="*">
            <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
     </UserContext.Provider>
  );
}

export default App;
