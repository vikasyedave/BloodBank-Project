import { useHistory } from "react-router"

const Donorstable=({donorsUsers})=>{
    const history = useHistory()

    return(
            <tr className="table-row">
                <td>{donorsUsers.u_id}</td>
                <td>{donorsUsers.u_name}</td>
                <td>{donorsUsers.u_address}</td>
                <td>{donorsUsers.blood_grp}</td>
                <td>{donorsUsers.d_donate_date}</td>
                
               
                
            </tr>
    )
}

export default Donorstable