import { useHistory } from "react-router"

const BloodStockTable=({bloodstock})=>{
    const history = useHistory()

    return(
            <tr className="table-row">
                <td>{bloodstock.blood_grp}</td>
                <td>{bloodstock.count}</td> 
            </tr>
    )
}

export default BloodStockTable
