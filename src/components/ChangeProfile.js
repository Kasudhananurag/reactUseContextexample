import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function ChangeProfile(props)
{
    const {username, setUserName} = useContext(AppContext)
    const [newUserName,setNewUserName] = useState("");
    return <div>
        <input type="text" onChange={ (event) => setNewUserName(event.target.value) } />
        <button onClick={ () => {setUserName(newUserName)} } >Update uSername</button>
    </div>
}