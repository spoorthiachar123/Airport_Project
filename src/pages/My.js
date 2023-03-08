
import Header from'./pages/Header.js';
import Footer from './pages/Footer.js';
import React, { useState } from 'react'
import SearchForm from './pages/SearchForm.js';
import LoadingBar from 'react-top-loading-bar';



function App() {
const [progress, setProgress] = useState(0);
  return (
    <>
    <Header/>
    <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
    <SearchForm setProgress={setProgress}/>
    <Footer/>
    </>
    );
} 

export default App;