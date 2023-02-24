import React from 'react';
import Landing from "./components/Landing/Landing";
import Post from "./components/Post/Post"
import Form from "./components/Form/Form";
// import Card from "./components/Card/Card";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = ()=>{
  return(
    <Router>
      <Landing />
      <Routes> 
        <Route path="/form" element={<Form/>}> </Route>
        <Route path ="/post" element ={<Post/>}> </Route>
      </Routes>
    </Router>
  )
} 

export default App; 