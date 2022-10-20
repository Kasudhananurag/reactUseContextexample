import {Link} from "react-router-dom";
export default function Navbar()
{
    return <div>
        <Link to="/">Home</Link>&nbsp;
        <Link to="about">About</Link>&nbsp;
        <Link to="profile">Profile</Link>&nbsp;
        {/* <Link to="/">Home</Link> */}
    </div>
}