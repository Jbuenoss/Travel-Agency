import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormComponent() {

    return (
        <Form>
            <Row className='g-2 mb-2'>
                <Col xs={12} sm={7}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>

                <Col xs={12} sm={5}>
                    <Form.Group  controlId="formBasicCheckbox">
                        <Form.Label>Tour</Form.Label>
                        <Form.Select arial-label="Default select example">
                            <option>Select your destiny</option>
                            <option value="1">South Africa</option>
                            <option value="2">Greece</option>
                            <option value="3">Paris</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default FormComponent;