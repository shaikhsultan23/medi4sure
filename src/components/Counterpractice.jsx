import React,{useState} from "react";
import {Row,Col,Button,Form} from "react-bootstrap";

export const Counterpractice=()=>{
    const [count,setCount]=useState(0);
     const handleincrease=()=>{
        setCount(count+1);
    };
    const handledecrease=()=>{
        setCount(count-1);
    };
    return(
        <div>
            <Row lg={4}>
                <Col>
                <Button onClick={handleincrease} >  +++</Button>
                </Col>
            </Row>
            <Row>
                <p>{count}</p>
            </Row>
            <Row lg={4}>
                <Col>
                <Button onClick={handledecrease} >---</Button>
                </Col>
            </Row>
        </div>
    )

}
