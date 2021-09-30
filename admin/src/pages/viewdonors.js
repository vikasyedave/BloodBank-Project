import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "../common/constant"
import Donorstable from "./Donorstable"
import {Redirect} from "react-router-dom"



const ViewDonors=()=>{
    
        const [donors, setDonors] = useState([])

    useEffect(()=>{
        getDonors()
    },[])

    const getDonors = () =>{
        axios.get(url+'/donors/getAllDonors').then((response)=>{
            const result = response.data

            if(result.status === 'success'){
                setDonors(result.data)
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
            <div className="donors">
               
                <h1 >All DONORS LIST </h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>DONOR ID</th>
                                <th>DONOR NAME</th>
                                <th>ADDRESS</th>
                                <th>BLOOD GROUP</th>
                                <th>DONATE DATE</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {donors.map((donorsUsers)=>{
                                return <Donorstable donorsUsers={donorsUsers} />
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

export default ViewDonors