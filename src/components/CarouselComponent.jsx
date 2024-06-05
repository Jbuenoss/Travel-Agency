import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/Logo.jpg'; //.. is realtive way

import img1 from '../assets/africa-do-sul.jpg';
import img2 from '../assets/greece.jpg';
import img3 from '../assets/paris.jpg';


import './style.css'

function CarouselComponent(){

    return (
        <Carousel>

          <Carousel.Item className="c-item">
            <img src={img1} className="c-img"/>
            <Carousel.Caption>
              <h2 className="mb-5">Discover the world with us</h2>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="c-item">
          <img src={img2} className="c-img"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="c-item">
            <img src={img3} className="c-img"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      );
}

export default CarouselComponent