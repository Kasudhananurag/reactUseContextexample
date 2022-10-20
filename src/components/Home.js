import { useContext } from "react";
import { AppContext } from "../App";

export default function Home(props)
{
    const {username} = useContext(AppContext)
    return <h1>this is home page for {username}</h1>
}