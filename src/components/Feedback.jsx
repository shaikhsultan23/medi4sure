import { Col, Row ,Form,Button} from "react-bootstrap";
import "./Feedback.css";

export const Feedback=()=>{
    return(
        <div>
        
    
            <Form>
                <Form.Control placeholder="Enter the title" className="fbrow"></Form.Control>
                <Form.Control as="textarea" placeholder="Enter Feedback Here"className="fbrow"></Form.Control>
                <Form.Control as="textarea" placeholder="Enter Your Experience"className="fbrow"></Form.Control>
                <Row className="fbrow">
                    <Col lg={8}></Col>
                    <Col lg={1}>
                        <Button>Submit</Button>
                    </Col>
                    <Col lg={1}>
                        <Button>Login</Button>
                    </Col>
                    <Col lg={2}>
                    <Button>Cancel</Button>
                    </Col>

                </Row>
                </Form>

        
        </div>
    );
};
