import Card from 'react-bootstrap/Card';
import img1 from '../assets/greece.jpg';
import img2 from '../assets/paris.jpg';
import img3 from '../assets/africa-do-sul.jpg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalComponent from '../components/ModalComponent';

function Packages(){

    return (
        <div className='mt-3 ms-5 me-5' id='packages'>
            <h2 className='text-center mb-3'>Packages</h2>
            <Row>
                <Col md sm={12} className='mb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={img1} alt="Card image" className='c-card-img' />
                        <Card.ImgOverlay >
                            <Card.Title>South Africa</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col md sm={12} className='mb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={img2} alt="Card image" className='c-card-img'/>
                        <Card.ImgOverlay>
                            <Card.Title>Paris</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col md sm={12} className='mb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src={img3} alt="Card image" className='c-card-img'/>
                        <Card.ImgOverlay>
                            <Card.Title>Greece</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md sm={12} className='mb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/38/8f.jpg" alt="Card image" className='c-card-img' />
                        <Card.ImgOverlay >
                            <Card.Title>New York</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col md sm={12} className='mb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://www.1001dicasdeviagem.com.br/wp-content/uploads/2019/11/coliseu-de-roma-historia-dicas-e-ingressos-coliseu-de-roma-historia-dicas-e-ingressos-9.png" alt="Card image" className='c-card-img'/>
                        <Card.ImgOverlay>
                            <Card.Title>Rome</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

                <Col md sm={12} className='mb-2'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://cdn.britannica.com/85/95085-050-C749819D/Sydney-Opera-House-Bennelong-Point-Port-Jackson.jpg" alt="Card image" className='c-card-img'/>
                        <Card.ImgOverlay>
                            <Card.Title>Sydney</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            <ModalComponent/>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Packages;