import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
      
  }

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor="gray";
      showAlert("Dark mode","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode","success");
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtlis" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Textform heading="Enter the text to analyze" mode={mode} />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
