import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "../common/constant"
import BuyerTable from "./BuyerTable"
import {Redirect} from "react-router-dom"




const ViewBuyer=()=>{
    
        const [buyer, setBuyer] = useState([])

    useEffect(()=>{
        getBuyer()
    },[])

    const getBuyer = () =>{
        axios.get(url+'/donors/getAllBuyer').then((response)=>{
            const result = response.data

            if(result.status === 'success'){
                setBuyer(result.data)
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
            <div className="Buyer">
               
                <h1 >All BUYERS LIST  </h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>BUYER ID</th>
                                <th>BUYER NAME</th>
                                <th>ADDRESS</th>
                                <th>BLOOD GROUP</th>
                                <th>BUY DATE </th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyer.map((buyersUsers)=>{
                                return <BuyerTable buyerUsers={buyersUsers} />
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

export default ViewBuyer