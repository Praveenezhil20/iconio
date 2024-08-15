import './App.css';
import ResponsiveAppBar from "./Nexcent"; // Ensure this import is correct
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import for routing
import Home from './Appbarbuttons/Home';
import Service from './Appbarbuttons/Service';
import Products from './Appbarbuttons/Products';
import Feature from './Appbarbuttons/Feature';
import Testimonial from './Appbarbuttons/Testimonial';
import FAQ from './Appbarbuttons/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/service" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
