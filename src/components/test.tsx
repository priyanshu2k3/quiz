import React ,{ useState } from "react";


function Test(){
const arr=[0,1,2,3]
    const [inc,setInc]=useState(0)
    function increase(e:any){
        e.preventDefault()
        var val=e.target.value +1
        console.log(val)
        setInc(val)


    }
    return(<div>
        {arr.map((item)=>{return(<div > <button onClick={increase} value={inc}>{inc} click me</button></div>)})}
    </div>

    )
}
export default Test;