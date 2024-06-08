import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import InfoCard from './components/InfoCard';
import CardsComponent from './components/CardsComponent'
import Faq from './components/Faq';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <NavbarComponent/>
      <CarouselComponent/>
      <InfoCard/>
      <CardsComponent/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App