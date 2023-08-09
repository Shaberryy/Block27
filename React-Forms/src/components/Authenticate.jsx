// import SignupForm from "./SignUpForm";
// import Authenticate from "./Authenticate";

export default function Authenticate(props){
  const  {token, setToken} = props;
// asyn function handleClick()
   return (
   <>
   <h2>Authenticate</h2>
   <button onClick={token}>Authenticate Token</button>
   </>
   )
}