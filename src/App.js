
import React, {} from 'react';
import Navbar from "./layout/navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Footer from './components/Footer'
function App() {

  return (
 <Router>
    <div >
    <Navbar />
    <Routes />
    <Footer />

    </div>
    </Router>
  );
}
export default App;
