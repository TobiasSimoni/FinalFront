
import { Route,  Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Context from "./Components/utils/Context";

function App() {
  return (
      <div className="App">
        <Context>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detalles/:id' element={<Detail/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/favoritos' element={<Favs/>}/>
          
          </Routes>

          <Footer/>
          </Context>
          
      </div>
  );
}

export default App;
