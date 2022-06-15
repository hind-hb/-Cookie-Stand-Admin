import Header from "./Components/Header";
import Main from "./Components/main";

import { useState } from "react";

export default function Home() {
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
      <Main />
      

    
    </div>
  );
}