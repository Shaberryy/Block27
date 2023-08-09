import { useState } from "react";
// import Authenticate from "./component/Authenticate";

export default function SignupForm(){
   const [username, setUsername] = useState ("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);
   async function handleSubmit(event) {
      event.preventDefault();
      console.log("egg");
   }
   return( 
      <>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}>...
         <label>
         Username: <input value={username} onChange={(event) => setUsername(event.target.value)} />
         </label>
         <br/>
         <label>
         Password: <input value={password} onChange={(event) => setPassword(event.target.value)}/>
         </label>
         <br/>
         <button>Submit</button>
      </form>
      </>
   )

}