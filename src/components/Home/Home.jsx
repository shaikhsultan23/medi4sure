import { MediUpdates } from "./MediUpdates";
import { Feedback } from "../Feedback";
import { Emicalculator } from "../Emicalculator";
import { Loanitem } from "../Loanitem";
import { FileHeader } from "../Common/FileHeader";

import { Counterpractice } from "../Counterpractice";

export const Home = () => {
  return (
    <div>
      <Counterpractice />
      
       <FileHeader title="Emi Calculator"/>
      <Emicalculator/>
      <FileHeader title="Loanitem"/>
      <Loanitem />
      <FileHeader title="Feedback"/>
      <Feedback />
      <MediUpdates />
      
      
     
    </div>
  );
};
