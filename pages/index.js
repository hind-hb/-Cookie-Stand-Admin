import CookieStandAdmin from "./Components/CookieStandAdmin";
import LoginForm from "./Components/LoginForm";
import {useState, useEffect} from 'react'
import axios from 'axios';


export default function Home() 
  {

    const [token, setToken] = useState(null);
    const userData = {
      username: 'admin',
      password: 'admin1994'
    }
    useEffect(()=>{
      if (localStorage.token===undefined){
          axios.post("https://cookie-stand6789a57b.herokuapp.com/api/token/", userData).then(res=>{
          localStorage.setItem('token', res.data.access)
          })
          setToken(localStorage.getItem("token"))
      }
      setToken(localStorage.getItem("token"))
  
    }, [])
  
  
  
  return (
    <div >
      
      <CookieStandAdmin />
      { <LoginForm /> }
      
      

    
    </div>
  );
}