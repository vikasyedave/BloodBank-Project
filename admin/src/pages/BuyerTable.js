import { useHistory } from "react-router"

const Buyertable=({buyerUsers})=>{
    const history = useHistory()

    return(
            <tr className="table-row">
                <td>{buyerUsers.u_id}</td>
                <td>{buyerUsers.u_name}</td>
                <td>{buyerUsers.u_address}</td>
                <td>{buyerUsers.blood_grp}</td>
                <td>{buyerUsers.buy_date}</td>
                
                
               
                
            </tr>
    )
}

export default Buyertable