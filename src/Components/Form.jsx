import { useState } from "react"




export const Form=()=>{

const [formdetail,setformdetail]=useState({
name:"",
rating:"",
address:"",
votes:"",
reviews:"",
cost:"",
time:"",
cash:true,
onlinepaymnet:false,
card:false,
upi:false,
img:""
})



function fillstates(e)
{

let key=e.target.id
let pair=e.target.value

if(key=="name")
{

    setformdetail({...formdetail,name:pair})
}
if(key=="rating")
{

    setformdetail({...formdetail,rating:pair})
}
if(key=="address")
{

    setformdetail({...formdetail,address:pair})
}
if(key=="votes")
{

    setformdetail({...formdetail,votes:pair})
}
if(key=="reviews")
{

    setformdetail({...formdetail,reviews:pair})
}

if(key=="cost")
{

    setformdetail({...formdetail,cost:pair})
}
if(key=="time")
{

    setformdetail({...formdetail,time:pair})
}
if(key=="cash")
{

    setformdetail({...formdetail,cash:pair})
}
if(key=="img")
{

    setformdetail({...formdetail,img:pair})
}
}

function dealwithcheckbox(e)
{

if(e.target.checked==true)
{

if(e.target.value=="cash")
{

    setformdetail({...formdetail,cash:true})

}
if(e.target.value=="onlinepayment")
{

    setformdetail({...formdetail,onlinepayment:true})

}
if(e.target.value=="card")
{

    setformdetail({...formdetail,card:true})

}
if(e.target.value=="upi")
{

    setformdetail({...formdetail,upi:true})

}
}
else{



    if(e.target.value=="cash")
    {
    
        setformdetail({...formdetail,cash:false})
    
    }
    if(e.target.value=="onlinepayment")
    {
    
        setformdetail({...formdetail,onlinepayment:false})
    
    }
    if(e.target.value=="card")
    {
    
        setformdetail({...formdetail,card:false})
    
    }
    if(e.target.value=="upi")
    {
    
        setformdetail({...formdetail,upi:false})
    
    }




}



}








       





     return(

<div >


<input type="text" id="name" placeholder="Name of the hotel" onChange={(e)=>{fillstates(e)}} />
<br />
<input type="text" id="rating" placeholder="rating of the hotel"  onChange={(e)=>{fillstates(e)}}/>
<br />
<input type="text" id="address" placeholder="address"  onChange={(e)=>{fillstates(e)}}/>
<br />
<input type="text" id="votes" placeholder="votes"  onChange={(e)=>{fillstates(e)}}/>
<br />
<input type="text" id="reviews" placeholder="review"  onChange={(e)=>{fillstates(e)}}/>
<br />
<input type="text" id="cost" placeholder="cost"  onChange={(e)=>{fillstates(e)}}/>
<br />
<input type="text" id="time" placeholder="delivery time"  onChange={(e)=>{fillstates(e)}}/>
<br />
cash: <input type="checkbox"  value="cash" onCli={(e)=>{dealwithcheckbox(e)}}/>
onlinepayment:<input type="checkbox" value="onlinepayment" onChange={(e)=>{dealwithcheckbox(e)}}/>
card:<input type="checkbox" value="card" onChange={(e)=>{dealwithcheckbox(e)}}/>
upi:<input type="checkbox" value="upi" onChange={(e)=>{dealwithcheckbox(e)}}/>
<br />
<input type="text" placeholder="put the url" id="img"  onChange={(e)=>{fillstates(e)}}/>
<br />
<button>Post it to server</button>
<br />
<br />




</div>




  )  





}