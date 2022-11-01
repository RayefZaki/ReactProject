import { Button } from 'bootstrap';
import React from 'react'

import {  Routes,Route} from 'react-router-dom'
import LoginHW from './LoginHW';
import Nav from './Nav';
import RayefStory from './RayefStory';

function Router() {
  return (
      <>
      {/* <Nav/> */}
      <Routes>
      <Route path="/RayefStory" element={<RayefStory/>}></Route>
      <Route path="/login" element={<LoginHW/>}></Route>
    </Routes>
    
    </>
  )
}

export default Router