import CarouselComponent from '../components/CarouselComponent';
import InfoCard from '../components/InfoCard';
import CardsComponent from '../components/CardsComponent'
import Faq from '../components/Faq';


function Home(){

    return(
        <>
            <CarouselComponent/>
            <InfoCard/>
            <CardsComponent/>
            <Faq/>
        </>  
    );
}

export default Home