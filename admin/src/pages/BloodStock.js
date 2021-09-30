import axios from "axios"
import { useEffect, useState } from "react"
import { url } from "../common/constant"
import BloodStockTable from "./BloodStockTable"
import {Redirect} from "react-router-dom"



const BloodStock=()=>{
    
        const [bloodstock, setStock] = useState([])

    useEffect(()=>{
        getBloodStock()
    },[])

    const getBloodStock = () =>{
        axios.get(url+'/donors/getAllBloodStock').then((response)=>{
            const result = response.data

            if(result.status === 'success'){
                setStock(result.data)
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
            <div className="bloodstock">
               
                <h1 >All Blood Stock List </h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>Blood Group Name</th>
                                <th>Blood Stock(In Bags)</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {bloodstock.map((bloodstock)=>{
                                return <BloodStockTable bloodstock={bloodstock} />
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

export default BloodStock







