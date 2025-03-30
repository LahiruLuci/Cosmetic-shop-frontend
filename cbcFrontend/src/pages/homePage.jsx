import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <>
            <h1>This is home page!</h1>
            <Link to = "./login">Login</Link>
        </>
    )
}