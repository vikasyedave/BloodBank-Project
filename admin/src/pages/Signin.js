import axios from "axios"
import { useState } from "react"
import { Link , useHistory } from "react-router-dom"


import{url} from'../common/constant'


const Signin = () =>{
    const [u_id , setId] = useState('')
    const [u_email , setEmail] = useState('')
    const [u_password , setPassword] = useState('')

    const history = useHistory()
    

 

    const validateUser = () =>{
        if(u_email.length === 0){
            alert("enter your email")
        }
        else if(u_password.length === 0){
            alert("enter your password")
        }
        else{
            const data = {
                "u_email":u_email,
                "u_password":u_password
            }
            axios.post(url +'/users/signin' , data).then((response)=>{
                console.log(data)
                const result = response.data
                console.log(result)
                if(response.data.data.u_id===1){
                    if(result.status === 'success'){
                        alert("Login Successfull...")             
                        
                        localStorage.setItem("userinfo", result.u_email )
                        history.push('/home')

                    }
                    else{
                        alert("Invalid username or Password")
                    }     
                }
                else{
                    alert("Invalid username or Password")
                }
            })
        }
    }

    
    return (
        <div>
            <h1 className="btn btn-warning">LOGIN</h1>
            <br/>
            <div className="m">
                <label htmlFor=""className="u_email">Email</label>
                <input onChange={(event) =>{
                    setEmail(event.target.value)
                }}
                 type="email" className="form-control" placeholder="Enter Email" />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="u_password">Password</label>
                <input onChange={(event) =>{
                    setPassword(event.target.value)
                }}
                 type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="mb-3">
                <button className="btn btn-primary " id="si" onClick={validateUser} >sign in</button>

                

                  
                 </div>
        </div>
    )
}


export default Signin 