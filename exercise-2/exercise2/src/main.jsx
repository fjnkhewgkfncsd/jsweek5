import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css';
import App from './App.jsx'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer/>
  </StrictMode>,
)
