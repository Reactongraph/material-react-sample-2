import React from 'react';
import Header from './container/Header'
import Footer from './container/Footer'
import ProjectRoute from './projectRoute'
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <ProjectRoute />
      <Footer />
    </div>
  );
}

export default App;
