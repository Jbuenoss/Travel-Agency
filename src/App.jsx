import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div>
      <NavbarComponent/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App