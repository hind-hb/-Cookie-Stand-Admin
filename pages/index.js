import CookieStandAdmin from "./Components/CookieStandAdmin";
import LoginForm from "./Components/LoginForm";
import {useState, useEffect} from 'react'
import axios from 'axios';


export default function Home() 
  {

    const [token, setToken] = useState(null);
    const userData = {
      username: 'admin',
      password: 'admin1234'
    }
  
  
  return (
    <div >
      
      <CookieStandAdmin />
      { <LoginForm /> }
      
      

    
    </div>
  );
}