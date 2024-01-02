import { useDispatch, useSelector } from "react-redux"
import { payment } from "../../redux/create_slice"
import axios from "axios"
import Button from 'react-bootstrap/Button';

function Payment() {
    const dispatch=useDispatch()
    const pay=useSelector((state)=>state.userdetail.payment)
    let formdata= new FormData()
        formdata.append("amount",pay.amount)
        formdata.append("month",pay.month)
        console.log(pay.amount)
        console.log(pay.month)
        console.log(formdata)

    function change(e){
        dispatch(payment({...pay,month:e.target.value}))
    }
    const stripe=()=>{
        axios.get(`https://agaram.academy/api/shh/index.php?request=add_group_amount&{group_id:1,user_id:1,amount:1000,month:"JAN-23"}`).then(function(res){console.log(res)})
         window.location="https://buy.stripe.com/test_eVaeYV1Y2dnL4NOcMN"
    }
    return (
        <>
            <h1>Enter your Payment:</h1>
            <label>Enter your amount:</label>
            <input type="text" onKeyUp={(e)=>{dispatch(payment({...pay,amount:e.target.value}))}}/><br />
            <label>Select the month:</label><br />
            <input value="JAN" type="checkbox" onChange={change} />
            <span> January </span><br />
            <input value="FEB" type="checkbox" onChange={change } />
            <span> February </span><br />
            <input value="MAR" type="checkbox" onChange={change } />
            <span> March </span><br />
            <input value="APR" type="checkbox" onChange={change } />
            <span> April </span><br />
            <input value="MAY" type="checkbox" onChange={change } />
            <span> May </span><br />
            <input value="JUN" type="checkbox" onChange={change } />
            <span> June </span><br />
            <input value="JUL" type="checkbox" onChange={ change} />
            <span> July </span><br />
            <input value="AUG" type="checkbox" onChange={change } />
            <span> August </span><br />
            <input value="SEP" type="checkbox" onChange={change } />
            <span> September </span><br />
            <input value="OCT" type="checkbox" onChange={change } />
            <span> October </span><br />
            <input value="NOV" type="checkbox" onChange={ change} />
            <span> November </span><br />
            <input value="DEC" type="checkbox" onChange={change } />
            <span> December </span><br/>
            <Button type="button" variant="primary" onClick={()=>stripe()}>Pay</Button>


        </>

    )
}
export default Payment