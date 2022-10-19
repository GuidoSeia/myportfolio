import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Index from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Index/>} />       
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
