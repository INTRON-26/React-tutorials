import './App.css';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {initializeApp} from 'firebase/app';
import 'firebase/auth';
import Login from './pages/Login';
import Signup from './pages/Signup';

const firebaseConfig = {
  apiKey: "AIzaSyAXDJ7tGUr6UZq7iAZQEH0R3I4UjZLn9s8",
  authDomain: "crop-data-analytics.firebaseapp.com",
  projectId: "crop-data-analytics",
  storageBucket: "crop-data-analytics.appspot.com",
  messagingSenderId: "142277355011",
  appId: "1:142277355011:web:9ccf580dd5dc41c4135036",
  measurementId: "G-8LYR6EMRSD"
};
initializeApp(firebaseConfig)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Header />} /> 
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
