import Card from 'react-bootstrap/Card';
import img1 from '../assets/greece.jpg';
import img2 from '../assets/paris.jpg';
import img3 from '../assets/africa-do-sul.jpg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ModalComponent from './ModalComponent'

function CardsComponent() {

    return (
        <div className='mt-3 ms-5 me-5' id='packages'>
            <h2 className='text-center mb-3'>Favorites Among Travelers</h2>
            <Row>
                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={img1} alt="Card image" className='c-card-img' />
                        <Card.ImgOverlay >
                            <Card.Title>South Africa</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={img2} alt="Card image" className='c-card-img'/>
                        <Card.ImgOverlay>
                            <Card.Title>Paris</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Img src={img3} alt="Card image" className='c-card-img'/>
                        <Card.ImgOverlay>
                            <Card.Title>Greece</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>


            </Row>



        </div>
    );
}

export default CardsComponent