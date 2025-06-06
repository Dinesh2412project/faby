
import {BrowserRouter ,Routes,Route,} from 'react-router-dom';
import Home from './pages/home/home';



{/* import  Features from'./pages/features/Features.jsx';
import  Clients from'./pages/client/Clients.jsx';
import   Price from'./pages/price/Price.jsx';
import  About from'./pages/about/About.jsx';
import  Faq from'./pages/faq/Faq.jsx';
*/}

function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route  path="/" element={<Home />}/>
       
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
