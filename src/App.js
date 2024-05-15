import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/Auth/login';
// import Homepage from './pages/resume_builder/Homepage';
import PrivateRoute from "./routes/PrivateRoute";
import Template from './pages/user-resume/Template';
import LandingPage from './pages/user-resume/Landingpage';
import AddResume from './pages/user-resume/AddResume';
import Homepage from './pages/resume_builder/Homepage';





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<PrivateRoute component={Homepage} />} >
        <Route path="/resume-maker" element ={<PrivateRoute component = {LandingPage} />} />
        <Route path="/resume-maker-add-template" element={<Template/>}/>
        {/* <Route path="/resume-maker/add-template" element ={<PrivateRoute component ={Template} />} /> */}
        <Route path="/resume-maker/resume" element ={<PrivateRoute component ={AddResume}/>} />
        
      
      </Route>
      <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
