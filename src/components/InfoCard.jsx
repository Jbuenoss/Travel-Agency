import { MdTravelExplore } from "react-icons/md";
import { CiPlane } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

function InfoCard() {

    return (
        <div className="overview mt-3 ms-5 me-5 ">
            <Container className="d-flex h-100 align-items-center justify-content-center">
                <Row className= "text-center w-100 fs-4 d-flex align-items-center" >
                    <Col sm={4} className="mt-2 md-3">
                        <IoPersonOutline className="me-2 fs-1" id='primary-color' />Join over 25,000 delighted customers
                    </Col>
                    <Col sm={4} className="mt-2 md-3">
                        <CiPlane className="me-2 fs-1" id='primary-color' />Unforgettable memories with our personalized travel plans
                    </Col>
                    <Col sm={4} className="mt-2 md-3">
                        <MdTravelExplore className="me-2 fs-1" id='primary-color' /> Discover The World of your dreams!
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InfoCard