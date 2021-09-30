import { useState } from 'react'
import axios from "axios"
import {url} from '../common/constant'
import { useHistory } from "react-router-dom"
import {Redirect} from "react-router-dom"

const Organization = () => {
  // define the state
  const [org_name, setOrgName] = useState('')
  const [org_address, setAddress] = useState('')
  const [org_city, setCity] = useState('')
  const [ org_state, setState] = useState('')
  const [ org_contact_no, setContactNo] = useState('')
  const [org_start_date, setStartDate] = useState(undefined)
  const [org_end_date, setEnddate] = useState('')
 

  const history = useHistory()

  const register = () => {

    if (org_name.length === 0) {
      alert('select organization name')
    } else if (org_address.length === 0) {
      alert('select address')
    } else if (org_city.length === 0) {
      alert('select city ')
    } else if (org_state.length===0) {
      alert('select state')
    }else if (org_contact_no.length === 0) {
        alert('select contact no')
    }else if (!org_start_date) {
        alert('select start date')
    }else if (!org_end_date) {
        alert('select end date')
    }

    else {
    
        const data = {
            "org_name":org_name,
            "org_address":org_address,
            "org_city":org_city,
            "org_state":org_state,
            "org_contact_no":org_contact_no,
            "org_start_date":org_start_date,
            "org_end_date":org_end_date
        }

    
   
          
            axios.post(url +'/organization/addorgnization' , data).then((response)=>{
                const result = response.data

                if(result.status === 'success'){
                    alert("Registration Successful")

                    history.push('/home')
                }
                else{
                    alert("Registration failed")
                }
            })
          }
  }

  if(!localStorage.getItem("userinfo")){
    alert("please login first")
    return( <Redirect to="/signin"/> )
}

  return (
    <div className="container">
      <h1>Organization Register</h1>

      <div className="mb-3">
        <label>Organization Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setOrgName(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label>Address</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setAddress(event.target.value)
          }}
          className="form-control"
          type="email"
        />
      </div>
      <div className="mb-3">
        <label>City</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setCity(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      
      <div className="mb-3">
        <label>State</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setState(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      
    

      <div className="mb-3">
        <label>Contact No</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setContactNo(event.target.value)
          }}
          className="form-control"
          type="number"
        />
      </div>

      <div className="mb-3">
        <label>Start Date</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setStartDate(event.target.value)
          }}
          className="form-control"
          type="date"
        />
      </div>

      <div className="mb-3">
        <label>End Date</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setEnddate(event.target.value)
          }}
          className="form-control"
          type="date"
        />
      </div>


      <div className="mb-3">
        <button onClick={register} className="btn btn-success">
         Register
        </button>
      </div>
    </div>
  )
}

export default Organization