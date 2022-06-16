import Header from "./Header";
import Main from "./main";


import { useState } from "react";

export default function CookieStandAdmin() {
  
  const [report, setReport] = useState((""));

  function formHandle(event) {
    event.preventDefault();
    const Location = {
      location: event.target.location.value,
      Min: event.target.min.value,
      Max: event.target.max.value,
      Avg: event.target.avg.value,
    };

    setReport(Location);
  }
  return (
    <div >
      
      <Header />
      
        <Main  />
        
      

    
    </div>
  );
}