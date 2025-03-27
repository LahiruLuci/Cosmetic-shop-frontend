import { useState } from "react"
import "./testing.css"

export default function Testing(){

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Students")

    function increment(){
        setCount(count + 1)
        //console.log("increment")
    }

    function decrement(){
        setCount(count - 1)
        //console.log("decrement")
    }

    function changeName(value){
        setName(value)
    }

    return(
        <div className="background">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}> - </button>
            <span> {count} </span>
            <button className="val" onClick={increment}> + </button>
            
            <div className="buttonPanal">
                <button onClick={()=>changeName("Students")}>Students</button>
                <button onClick={()=>changeName("Teachers")}>Teachers</button>
                <button onClick={()=>changeName("Admins")}>Admins</button>
            </div>
        </div>
    )
}