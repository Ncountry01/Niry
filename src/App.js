import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/Addem';
import DashBoard from './dashboard/Logical';
import EmployeesList from './components/Employeelist';
import UpdateData from './components/EditData';
import {Routes, Route } from 'react-router';
import Home from './Navbar/Home';
import AppNavBar from './Navbar/AppNav';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppNavBar />
<Routes>
<Route>
<Route path='/' element={<Home/>} />
     <Route path='/dashboard' element={ <DashBoard /> } />
   <Route path='/list' element= {<EmployeesList />} />
    <Route path='/update/:id' element={ <UpdateData/> } />
    <Route path='/add' element  ={<AddEmployee /> } />
      </Route>
      </Routes>
    </div>
    </React.Fragment>
  );
}

export default App;
