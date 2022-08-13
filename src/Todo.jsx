import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Todo(){
    let item=useRef();
    let quantity=useRef();
    let price=useRef();
    let[list,setList]=useState([]);
    let[error,setError]=useState("");

    function handleAdd(){
        if(item.current.value!=="" && quantity.current.value!=="" && price.current.value!==""){
        setList([...list,{
            Item: item.current.value,
            Quantity:quantity.current.value,
            Price: price.current.value,
        }])
        item.current.value="";
        quantity.current.value="";
        price.current.value="";
        setError("")
       // setDef("");
        
    }
        else 
         setError("please,fill all the values")
    }
    let handleRemove=()=>{
        if(list.length!==0)
        setList([])

    }

    let handleStaus=(id)=>{
           const updateList= list.filter((ele,index)=>index!==id)

           setList(updateList);
    }

    
    console.log(list);
    let styyle=
        {
            display: "inline-block",
            position: "absolute",
            left: "95%",
            top: "2%",
            color: "red",
            fontWeight: "bold"
        }
    
   
    return(
        <>
          <div style={{border:"1px solid blue", display: "inline-block"}}>
            Item:<input style={{marginLeft:"28px"}} type="text" ref={item}></input><br/>
            Quantity:<input type="text" ref={quantity} ></input><br/>
            Price:<input style={{marginLeft:"26px"}} type="text" ref={price}></input><br/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove All</button><br/>
            <span style={{color:"red"}}>{error}</span>
          </div><br></br>
          {list.map((ele,index)=>{
            return(
                <div key={index} style={{border:"1px solid blue", position: "relative" , width:"40%", marginLeft:"29%", marginTop:"5px"}}>
                        <button style={styyle} id="spaan" onClick={()=>handleStaus(index)}>X</button>
                    <p> Item: {ele.Item}</p>
                    <p> Quantity: {ele.Quantity}</p>
                    <p> Price: {ele.Price}</p>

                </div>
            )

          })}
        </>
    );
}