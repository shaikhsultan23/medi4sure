import React,{ useState } from "react";
import { Col, Row ,Form,Button} from "react-bootstrap";
import "./Feedback.css";

export const Feedback=()=>{
    const[val,setVal]=useState("Welcome to pickupBiz!!!!");
    const handlersubmit=()=>{
         setVal("Thanks for joining us!!!");
       // document.getElementById("titletxt").value=msg;
       // document.getElementById("titletxt1").value=msg;
       // document.getElementById("titletxt2").value=msg;
        //console.log("Submir is Clicked!...........")

    }
    return(
        <div>
        
    
            <Form>
                <p>
                <span>{val}</span>
                </p>
                <Form.Control placeholder="Enter the title" className="fbrow"></Form.Control>
                <Form.Control  as="textarea" placeholder="Enter Feedback Here"className="fbrow"></Form.Control>
                <Form.Control as="textarea" placeholder="Enter Your Experience"className="fbrow"></Form.Control>
                <Row className="fbrow">
                    <Col lg={8}></Col>
                    <Col lg={1}>
                        <Button onClick={handlersubmit} >Submit</Button>
                    </Col>
                    <Col lg={1}>
                        <Button>Login</Button>
                    </Col>
                    <Col lg={2}>
                    <Button onClick={()=>setVal("Sorry For Cancellation")} >Cancel</Button>
                    </Col>

                </Row>
                </Form>

        
        </div>
    );
};
