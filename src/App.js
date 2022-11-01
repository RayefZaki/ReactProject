
import './App.css';
import Nav from './componets/Nav.js';
import Footer from './componets/Footer';
import Cards from './componets/Cards'
import Login from './componets/Login';
import Search from './componets/Search';
import { Course } from'./componets/Course'
import { Input } from '@chakra-ui/react'
import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'





function App() {
  const [title, setTitle] = useState("");
  const result = Course.filter(item => item.title.toLowerCase().includes(title));
  console.log(result);
  return (
    <>
 <Nav>
 </Nav>

 <Input placeholder='Search ...' backgroundColor={'white'} mb={10} w={400} onChange={(e)=> setTitle(e.target.value)}/>
 <Button colorScheme='blue'>Button</Button>
  <div className='Card'> 
  {result.map((item) => (
 <Cards Name = {item.title} Description = {item.description} Expiry = {item.Expiry} Img ={item.Img}/>



 ))}
 </div> 

 <Footer></Footer> 

 {/* <ClassCom></ClassCom>
 <Classimg></Classimg>
{/* <Login/> */}
</>
  );
}

export default App;
