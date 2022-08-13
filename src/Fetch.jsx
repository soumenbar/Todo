import  React  from "react";
import { useState } from "react";


export default function Fetch(){
    let [data, setData] = useState([]);

   
    

    const getData=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch(error=>console.log(error));
    }


  
    /*useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        // console.log(data.data);
        setData(data);
      });
    }, []);*/
  
    console.log("rendering");
    console.log(data);
    return(
        
       <>
       <button onClick={()=>getData()}>Fetch</button>
       {data.map((ele)=>{
       return (<div key={ele.id}>
                     <div><img src={ele.image} alt="imag"></img></div>
                </div>       
       )
       }
       

       )}
       </>
    );
}