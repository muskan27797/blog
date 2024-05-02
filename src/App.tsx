import React from 'react';
import './App.css';
import { BlogForm } from './Components/BlogForm/BlogForm';
import { BlogWrapper } from './Components/BlogContent/BlogWrapper';
import {Route, Routes} from "react-router-dom"
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element = {<BlogForm/>}></Route>
        <Route path="/blogs" element = {<BlogWrapper/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
