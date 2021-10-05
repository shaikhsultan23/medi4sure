import React,{useState} from "react";
import { Col, Row ,Form,Button} from "react-bootstrap";
import "./Counter.css";

export const Counter=()=>{
    const [count,setCount]=useState(0);
    const handleIncrease=()=>{
        setCount(count+1);
    };
    const handleDecrease=()=>{
        setCount(count-1);
    };
    

return(
    <div>
        <Row className="row" lg={3}> 
                <Col>
                <p>Increasing Value</p>
                </Col>
                <Col>
                <Button className="b1" onClick={handleIncrease}>(+)Increase value by One</Button>
                </Col>
                 </Row>
        <Row lg={5}>
        <Col>
                <p>Fainal Value</p>
                </Col>
        <Col> <p>{count}</p>
       </Col>
        </Row>
        <Row lg={3}>
        <Col>
                <p>Decreasing Value</p>
                </Col>
       <Col>
        <Button  className="b2" onClick={handleDecrease}>(-)Decrease value by One</Button>
        </Col> </Row>

    </div>
);
};