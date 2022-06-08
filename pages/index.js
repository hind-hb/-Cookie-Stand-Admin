import Header from "./Components/Header";
import Main from "./Components/main";
import Footer from "./Components/Footer";

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
      <Main formHandle={formHandle} />
      <h1 className="text-center text-black">Report Table coming soon.............</h1>
      <h1 className="text-center text-black">{JSON.stringify(report)}</h1>

      <Footer />
    </div>
  );
}