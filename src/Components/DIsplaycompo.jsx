
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from "./Card";




  export  const Displaycompo=()=>{



    const [data,setdata]=useState([])
const [queries,setqueries]=useState({

sortrating:"none",
cashonly:false,
cardonly:false,
allpayment:false,
starsort:"none",
cashsort:"none",
size:"15",
page:"1"







})


    useEffect(()=>{
    
        Getdata()
    
    
    },[queries])

function Getdata()
{
    axios.get(`https://restaurentassignment.herokuapp.com/restaurants?sortrating=${queries.sortrating}&cashonly=${queries.cashonly}&cardonly=${queries.cardonly}&allpayment=${queries.allpayment}&starsort=${queries.starsort}&cashsort=${queries.cashsort}&size=${queries.size}&page=${queries.page}`)
    .then((res)=>setdata([...res.data]))
    .catch((err)=>{console.log(err)})
    
}


function manipulatequeries(e)
{


if(e.target.checked &&e.target.value=="cashonly")
{
    setqueries({...queries,cashonly:true})
}
else{

    setqueries({...queries,cashonly:false})

}

if(e.target.checked &&e.target.value=="cardonly")
{
    setqueries({...queries,cardonly:true})
}
else{

    setqueries({...queries,cardonly:false})

}

if(e.target.checked &&e.target.value=="allpayment")
{
    setqueries({...queries,allpayment:true})
}
else{

    setqueries({...queries,allpayment:false})

}



}

// lllll













// function Settingtherating(param)
// {

    
// }



return (
<>

{/* {pages.map((e)=><button onClick={()=>{setqueries({...queries,page:e})}} >{e}</button>)} */}


<div>
    <button  onClick={()=>{setqueries({...queries,sortrating:"hightolow",cashsort:"none"})}}>rating-hight-to-low</button>
    <button  onClick={()=>{setqueries({...queries,sortrating:"lowtohigh",cashsort:"none"})}}>rating-low-to-high</button>
   <br />
   <br />

</div>

<div>
    <input  type="checkbox" value="cashonly" onChange={(e)=>{manipulatequeries(e)}} />Cashonly
    <input value="cardonly" type="checkbox" onChange={(e)=>{manipulatequeries(e)}} />Cardonly
    <input value="allpayment" type="checkbox"  onChange={(e)=>{manipulatequeries(e)}}/>All
    <br />
    <br />

</div>

<div>
<button  onClick={()=>{setqueries({...queries,starsort:"1star"})}}>1 star</button>
    <button onClick={()=>{setqueries({...queries,starsort:"2star"})}}>2 star</button>
    <button onClick={()=>{setqueries({...queries,starsort:"3star"})}}>3 star</button>
    <button onClick={()=>{setqueries({...queries,starsort:"4star"})}}>4 star</button>
    <button onClick={()=>{setqueries({...queries,starsort:"none"})}}>Show all stars</button>
    <br />
    <button onClick={()=>{setqueries({...queries,cashsort:"hightolow",sortrating:"none"})}}>Cost-high-to-low</button>
    <button onClick={()=>{setqueries({...queries,cashsort:"lowtohigh",sortrating:"none"})}}>cost-low-to-high</button>

</div>




{data.map((e)=><Card props={e}/>)}




</>




)

}