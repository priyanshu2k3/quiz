import React from "react";

interface Props{
    question:string,
    questionNo:Number,
    options:{}
}

const QuestionCard=(props:Props)=>{return(<div>
<p>Question No:{1}/20</p>
<p>Question:{1}</p>
<div>
    <option value="">1</option>
    <option value="">1</option>
    <option value="">1</option>
    <option value="">1</option>
</div>
</div>)}




export default QuestionCard;