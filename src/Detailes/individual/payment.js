import { useDispatch, useSelector } from "react-redux"
import { payment } from "../../redux/create_slice"
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
            <h1>Enter your Payment:</h1>
            <label>Enter your amount:</label>
            <input type="text" onKeyUp={(e)=>{dispatch(payment({...pay,amount:e.target.value}))}}/><br />
            <label>Select the month:</label><br />
            <input value="JAN" type="radio" name="JAN" onChange={change } />
            <span> January </span><br />
            <input value="FEB" type="radio" name="JAN" onChange={change } />
            <span> February </span><br />
            <input value="MAR" type="radio" name="JAN" onChange={change } />
            <span> March </span><br />
            <input value="APR" type="radio" name="JAN" onChange={change } />
            <span> April </span><br />
            <input value="MAY" type="radio" name="JAN" onChange={change } />
            <span> May </span><br />
            <input value="JUN" type="radio" name="JAN" onChange={change } />
            <span> June </span><br />
            <input value="JUL" type="radio" name="JAN" onChange={change } />
            <span> July </span><br />
            <input value="AUG" type="radio" name="JAN" onChange={change } />
            <span> August </span><br />
            <input value="SEP" type="radio" name="JAN" onChange={change } />
            <span> September </span><br />
            <input value="OCT" type="radio" name="JAN" onChange={change } />
            <span> October </span><br />
            <input value="NOV" type="radio" name="JAN" onChange={change } />
            <span> November </span><br />
            <input value="DEC" type="radio" name="JAN" onChange={change } />
            <span> December </span><br/>
            <Button type="button" variant="primary" onClick={()=>stripe()}>Pay</Button>


        </>

    )
}
export default Payment