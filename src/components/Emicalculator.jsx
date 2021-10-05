import{Tabs,Tab}from "react-bootstrap";
import { Loanitem } from "./Loanitem";



export const Emicalculator=()=>{
    return(
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="homeolan" title="Home loan">
    <Loanitem type="Home"/>
  </Tab>
  <Tab eventKey="personalloan" title="personalLoan">
  <Loanitem type="personal"/>
  </Tab>
  <Tab eventKey="carloan" title="carloan">
  <Loanitem type="Car"/>
  </Tab>
</Tabs>
    );
    
};