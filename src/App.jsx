import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AppProvider } from './context';
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import BookList from "./Components/BookList/BookList.jsx"
import BookDetails from "./Components/BookDetails/BookDetails.jsx"

function App() {
  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<BookList />} />
        <Route path='/book/:id' element={<BookDetails />} />
      </Routes>
    </Router>
  </AppProvider>
  );
}

export default App;
