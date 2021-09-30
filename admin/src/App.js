import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link,Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import ViewUsers from './pages/viewusers';
import ViewDonors from './pages/viewdonors';
import ViewBuyer from './pages/viewbuyer';
import Organization from './pages/addorg';
import BloodStock from './pages/BloodStock';






function App() {
  const logout =()=>{
    localStorage.removeItem("userinfo");
  }
  return (
    <div className="App">
       <BrowserRouter>  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="">
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                  
                </li> 
                <li className="nav-item">
                  <Link className="nav-link" to="/addorgnization">
                    Add Organization
                  </Link>
                  
                </li>             
                <li className="nav-item">
                  <Link className="nav-link" to="/viewusers">
                    View All Users
                  </Link>
                  
                </li> 

                 <li className="nav-item">
                  <Link className="nav-link" to="/viewdonors">
                 View All Donors
                  </Link>
                  
               </li>

               <li className="nav-item">
                  <Link className="nav-link" to="/viewbuyer">
                 View All Buyer
                  </Link>
                  
               </li>

               <li className="nav-item">
                  <Link className="nav-link" to="/bloodstock">
                  Blood Stock
                  </Link>
                  
               </li>

               <li className="nav-item">
                  <Link className="nav-link" to="/home" onClick={logout}>
                Logout
                  </Link>
                  
               </li>

               
              
              </ul>
              
            </div>
          </div>
        </nav>
        
        <div className="container">
          <Switch>
             <Route path="/home" component={Home} />
             <Route path="/signin" component={Signin} /> 
            <Route path="/viewusers" component={ViewUsers}/>
            <Route path="/viewdonors" component={ViewDonors}/>
            <Route path="/addorgnization" component={Organization}/>
            <Route path="/viewbuyer" component={ViewBuyer}/>
            <Route path="/bloodstock" component={BloodStock}/>
          </Switch>
        </div>
      </BrowserRouter>  
    </div>
  );
}

export default App;
