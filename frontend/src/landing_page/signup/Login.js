// import React from "react";
// function Login() {
//   return (
//     <div className="login-container " >
//     <h4 className="loginH4">Login</h4>
//   <div class="mb-3">
//           <label for="exampleFormControlInput1" class="form-label">Email address</label>
//           <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"required></input>
//         </div>
//       <div class="mb-3">
//       <label for="inputPassword5" class="form-label">Password</label>
//       <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"required></input>
     
//       <button className="signup-button mt-3">Login</button>
//       </div>
//   </div>
// );
// }
// export default Login;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try{
            await axios.post("http://localhost:3002/login",{
                email, password
            })
            .then( res=>{
                if(res.data=== "exist"){
                    window.location.href = "http://localhost:3002/dashboard";
                }
                else if(res.data==="notexist"){
                    alert("user not exist");
                 
                }
        }
       )}
        catch(e){
             console.log(e);
        }
    }
  return (
    <div className='container mt-5'>
        <h1 className='mt-5'>Login</h1>
        {/* <h4 className="H4">Login</h4> */}

        <from>
            <input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <input type='password' name='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>

            <input  type='submit' onClick={submit}/>
        </from>
        <br/>
        <p>Or,</p>
        <br/>
        <Link to='/signup'>create account</Link>

        
    </div>
  )
}

export default Login