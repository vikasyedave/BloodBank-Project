import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "../common/constant"
import Usertable from "./Usertable"
import {Redirect} from "react-router-dom"



const ViewUsers=()=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const getUsers = () =>{
        axios.get(url+'/users/getAll').then((response)=>{
            const result = response.data

            if(result.status === 'success'){
                setUsers(result.data)
            }
            else{
                alert('error')
            }
        })
    }
    if(!localStorage.getItem("userinfo")){
        alert("please login first")
        return( <Redirect to="/signin"/> )
    }
    
    return (
    <div>
       
        
        <center>
            <div className="users">
                
                <h1>All USERS LIST</h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>USER ID</th>
                                <th>USER Name</th>
                                <th>USER EMAIL</th>
                                <th>Address</th>
                                <th>GENDER</th>
                                <th>MOBILE NUMBER</th>
                                

                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((bloodUser)=>{
                                return <Usertable bloodUser={bloodUser} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="back">
            <a href="/home">Back To Home</a>
            </div>
        </center>
    </div>
       
    )

}

export default ViewUsers