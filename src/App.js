// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

import {
 
 
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";





// let name = 'vishnu'
function App() {
  const [mode,setMode] = useState('light');
  
  const [alert,setAlert] = useState(null)
  const showAlert = (massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    // document.body.classList.remove('bg-primary')
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert('Dark mode has been enabled', 'seccess')
    document.title ='Dark Mode On'
    setInterval(() => {
    }, 2000);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert('Light mode has been enabled', 'success')
    document.title="Light Mode On"
    setInterval(() => {
    }, 1500);
  }
}


  return (
    <>
 <BrowserRouter>
<Navbar title= "TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

 
<div className="container my-3">

<Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
         
          <Route path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter" showAlert={showAlert} mode={mode}/>}>
      
          
          </Route>
</Routes>
  

</div>
</BrowserRouter>
    </>
    
  );
}

export default App;
