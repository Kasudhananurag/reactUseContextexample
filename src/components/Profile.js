import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Profile(props)
{
    const {username, setUserName} = useContext(AppContext)
    return <h1>this is Profile of {username} <ChangeProfile setUsername = {setUserName} /> </h1>
}