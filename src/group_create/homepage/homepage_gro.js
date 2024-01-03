import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getgroupname } from "../../redux/create_slice";

function ShareGroupDetailes() {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let loggedin_id = useSelector((state) => state.userdetail.loginUserDetails.id)
    let groupname = useSelector((state) => state.userdetail.groupnames)

    function filteredList() {
        axios.get(`https://agaram.academy/api/shh/index.php?request=get_user_groups&user_id=${loggedin_id}`).then(function (response) {
            dispatch(getgroupname(response.data.data))
        })
    }

    useEffect(() => {
        filteredList()
    }, [])

    function groupnav() {
        navigate("/groupdetails")
    }
    function creategroup() {
        navigate("/creategroup")
    }
    console.log(groupname)
    return (
        <>
            <h2>Self Help Hub</h2>
            {groupname.map((data) => {
                return (<>
                    <div>
                        <ul>
                            <li><Button type="button" variant="outline-dark" onClick={groupnav}>{data.name}</Button></li>
                        </ul>
                    </div>
                </>
                )
            }
            )}
            <Button type="button" onClick={creategroup} >Create Group</Button>
            <br /><br />
        </>
    )
}
export default ShareGroupDetailes