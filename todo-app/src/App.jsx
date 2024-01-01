
import './App.css'
import './index.css'
import SideBar from './components/sidebar'
import Header from './components/header'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';




function App() {
  // const [projects,setProjects] = useState({"Freelance":{} , "SBI":{} ,"HPCL":{} });
  const [projects,setProjects] = useState(["Freelance", "SBI" ,"HPCL"]);
  const [curr,setcurr] = useState("Freelance");
  return (
    <>
   
    <div className='MainScreen'>
    <SideBar projects={projects} setProjects={setProjects} curr = {curr} setcurr ={setcurr}/>
    <Header curr = {curr} />
    
    </div>
    </>
  )
}

export default App
