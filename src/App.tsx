<<<<<<< HEAD

import './App.css'
import { Footer } from './Common/Footer/Footer'
import { Header } from './Common/Header/Header'

function App() {
  

  return (
    <>
     <Header/>
     <Footer/>
    </>
  )
=======
import React, { useState } from 'react';
import './App.css';
import { Header } from './Common/Header/Header';
import { Footer } from './Common/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import Cart from './Cart/Cart';
import VideoPlayer from './components/Video/Videos';
import Trainings from './Training/Training';
import Login from './Common/Login/Login';
import Registration from './Common/Login/Registration';
import CourseDetail from './Common/CourseData/CourseDetail';
import AcademicProject from './AcademicProject/AcademicProject';
import Checkout from './Buy/Checkout';
import Navbar from './Common/Header/Navbar';
import Education from './AcademicProject/AcademicProject';
import AddressForm from './Buy/AddressForm';



function App() {
 

  return (
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/education' element={<Education/>} />
        <Route path='/videos' element={<VideoPlayer videoUrl="" onClose={() => {}} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/academic-projects' element={<AcademicProject/>} />
        <Route path='/trainings' element={<Trainings />} />
        {/* <Route path='/learn' element={<Learn/>} /> */}
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/register" 
          element={<Registration />}
        />

        <Route path="/course/:id" element={<CourseDetail/>} />
        {/* <Route path="/course" element={<CourseDetail/>} /> */}
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/navBar' element={<Navbar/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
>>>>>>> bfd2c72 (Adding Header Changes)
}

export default App;
