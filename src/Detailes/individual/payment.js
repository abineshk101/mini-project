import { useDispatch, useSelector } from "react-redux"
import { payment,statusData } from "../../redux/create_slice"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";


function Payment() {
    const dispatch=useDispatch()
    const pay=useSelector((state)=>state.userdetail.payment)
    console.log(pay.month)
    const {groupid}=useParams()
        console.log(groupid)
    let userid=useSelector((state)=>state.userdetail.loginUserDetails.id)
        console.log(userid)
 
let token=localStorage.getItem('token')
    function change(e){
        dispatch(payment({...pay,month:e.target.value}))
    }
    const stripe=()=>{  
    let formdata= new FormData()
    formdata.append("group_id",groupid)
    formdata.append("user_id",userid)
    formdata.append("amount",pay.amount)
    formdata.append("month",pay.month)
    console.log(pay.amount)
    console.log(pay.month)
    console.log(formdata) 

        axios.post(`https://agaram.academy/api/shh/index.php?request=add_group_amount`,formdata).then(function(res){console.log(res)})
        window.location="https://buy.stripe.com/test_eVaeYV1Y2dnL4NOcMN"
    }
    return (
        <>
        <div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
            <h1>Enter your Payment:</h1>
            <label>Enter your amount:</label>
            <input type="text" onKeyUp={(e)=>{dispatch(payment({...pay,amount:e.target.value}))}}/>
            <label>Select the month:</label>
            
            <span> <input value="JAN" type="radio" name="JAN" onChange={change }  />January </span>
           
            <span> <input value="FEB" type="radio" name="JAN" onChange={change } /> February </span>
           
            <span> <input value="MAR" type="radio" name="JAN" onChange={change } /> March </span>
            
            <span> <input value="APR" type="radio" name="JAN" onChange={change } />April </span>

            <span> <input value="MAY" type="radio" name="JAN" onChange={change } /> May </span>
            
            <span> <input value="JUN" type="radio" name="JAN" onChange={change } />June </span>
            
            <span> <input value="JUL" type="radio" name="JAN" onChange={change } />  July </span>
          
            <span>  <input value="AUG" type="radio" name="JAN" onChange={change } /> August </span>
            
            <span> <input value="SEP" type="radio" name="JAN" onChange={change } />September </span>
            
            <span> <input value="OCT" type="radio" name="JAN" onChange={change } />October </span>
            
            <span><input value="NOV" type="radio" name="JAN" onChange={change } /> November </span>
            
            <span> <input value="DEC" type="radio" name="JAN" onChange={change } />December </span><br/>
            <Button type="button" variant="dark" onClick={()=>stripe()}>Pay</Button>
            </div>

        </>

    )
}
export default Payment