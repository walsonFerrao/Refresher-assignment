



export const Card=({props})=>{



    // console.log(props.img,"props")


function checkpayment()
{
    let payment=""

    if(props.card==true)
    {
        payment=payment+"card"+" "
    }
    if(props.cash==true)
    {
        payment=payment+"cash"+" "
    
    }
    if(props.upi==true)
    {
        payment=payment+"upi"
    }
    return payment
}




return(
<div className="maincontainer">


<div className="subtopcontainer">

<div>
    <img src={props.img} alt="" />
</div>

<div>
<span style={{fontSize:"30px",fontWeight:"bold"}}>{props.name}</span>
<p style={{color:"#a99d9d"}}>{props.address}</p>
<p style={{color:"#a99d9d"}}>{props.cost}</p>
<p>{props.time}</p>
<p>{checkpayment()}</p>
</div>

<div>

<div style={{backgroundColor:"green",width:"30px",textAlign:"center",color:"white",height:"30px",borderRadius:"4px"}}>{props.rating}</div>
<p>{"766 votes"}</p>
<p>{"512 reviews"}</p>

</div>




</div>




<div className="subbottomcontainer">


</div>







</div>
)




}