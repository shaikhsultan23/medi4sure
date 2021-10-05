import {Row,Col,InputGroup,FormControl} from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
export const Loanitem=(props)=>{

    return(
        <div>
        <Row>
            <Col lg={3}>{props.type}Home Loan Amount</Col>
            <Col lg={9}>
              
  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
  </InputGroup>

            </Col>

            
        </Row>
       
        <Row>
            <Col lg={3}>Interest Rate</Col>
            <Col lg={9}>
              
  <InputGroup className="mb-3">
    <InputGroup.Text>%</InputGroup.Text>
    
    <FormControl aria-label="Amount (to the nearest dollar)" />
  </InputGroup>

            </Col>
        </Row>

         
        <Row>
            <Col lg={3}>Duration</Col>
            <Col lg={9}>
              
  <InputGroup className="mb-3">
  <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    
  </InputGroup>

            </Col>
        </Row>

        </div>
    );
};