import Header  from "./Components/Header"
import Main from "./Components/main"
import Footer from "./Components/Footer"
import { useState } from "react";
function Home (){
  const [report, setReport] = useState('Report Tabel Comming Soon ...');

 
return(
  <>
  <title>Cookie Stand Admin</title>
  <Header/>
  <Main/>
  
  <Footer/>
  
  </>
)

}
export default Home 