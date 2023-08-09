// import SignupForm from "./SignUpForm";
// import Authenticate from "./Authenticate";

import { useState } from "react";


export default function Authenticate(props){
   const [error,setError] = useState(null);

  const  {token, setToken} = props;
  
async function handleClick(){
   try{
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
      {
         method: "GET",
         headers: {"Content-Type" : "applicatoin/json", Authorization: `Bearer ${token}`
         }
      } 
   );
   const result = await response.json();
   }catch(error){
      setError(error.message)
   }
   console.log(handleClick)
}


   return (
   <>
   <h2>Authenticate</h2>
   { error && <p>{error}</p>}
   <button onClick={handleClick}>Authenticate Token</button>
   </>
   )
}