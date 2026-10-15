import { useState } from "react";

 const Login=()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [visible,setvisible]=useState(false)
    function valider(){
      setvisible(true)
    }
   
    return(
        <>
        <div className="Login">
        <h1 >Login</h1>
        <input type="text" onChange={(e) => setemail(e.target.value)} placeholider="login" /><br />
        <input type="password" onChange={(e) => setpassword(e.target.value)}  placeholder="password"/><br />
        <input type="button" value="valider" onClick={valider}/>
        { visible? <> <h3>{email}</h3>
        <h3>{password}</h3></>:<h3>NO DATA</h3>} 
        </div>
        </>
    )

 }
export default Login;