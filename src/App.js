
import './App.css';
import Nav from './componets/Nav.js';
import Footer from './componets/Footer';
import Cards from './componets/Cards'
import Search from './componets/Search';
import { Course } from'./componets/Course'
import { Input } from '@chakra-ui/react'
import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Router from './componets/Router';
import Outlet from './componets/Homepage';
import LoginHW from './componets/LoginHW';
import {  Routes,Route} from 'react-router-dom'







function App() {
  <Outlet></Outlet>
  const [title, setTitle] = useState("");
  const result = Course.filter(item => item.title.toLowerCase().includes(title));
  console.log(result);
  return (
    <>
 <Router/>
 <Nav/>
 

  {/* <ClassCom></ClassCom>
 <Classimg></Classimg> */}
 {/* <LoginHW/>  */}
</>
  );
}

export default App;
