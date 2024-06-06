import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ModalComponent from './ModalComponent';

import img1 from '../assets/africa-do-sul.jpg'; //.. is realtive way
import img2 from '../assets/greece.jpg';
import img3 from '../assets/paris.jpg';


import './style.css'

function CarouselComponent(){

    return (
        <Carousel className='mt-3 ms-5 me-5 shadow'>

          <Carousel.Item className="c-item">
            <img src={img1} className="c-img"/>
            <Carousel.Caption className='top-0'>
              <h2 className="mb-3 fs-1">Discover the world with us</h2>
              
              <ModalComponent className="mb-5 px-4 py-2"/>

              <h3 className="display-3 fw-bold mt-5 text-capitalize">unforgettable journeys</h3>
            </Carousel.Caption>
            <Carousel.Caption >
              <p>Discover the Splendor of South Africa</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="c-item">
          <img src={img2} className="c-img"/>
            <Carousel.Caption>
              <h3 className="display-3 fw-bold mt-5 text-capitalize">The season has arrived</h3>
              <p>Escape to the Idyllic Shores of Greece</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="c-item">
            <img src={img3} className="c-img"/>
            <Carousel.Caption>
              <h3 className="display-3 fw-bold mt-5 text-capitalize">enchanting atmosphere</h3>
              <p>Embrace the Romance of Paris</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      );
}

export default CarouselComponent