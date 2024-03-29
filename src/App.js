import React from  'react';git add .App
import './App.css';
import Blogs from './components/Blogs';
import Paggination  from './components/Paggination';
import Header from './components/Header';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
function App() {


  const{fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{

    fetchBlogPosts();

  },[]);

  return (
    <div className="App">
      <Header/>
      <Blogs/>
      <Paggination/>
    </div>
  );
}

export default App;
