import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({item}){
    const[counter,setcounter]=useState(1)

function addToCart() {
    console.log(item.name);
}
function addToFavorit() {
    console.log("Added to favorites");
}

    return(
    <>
       <span>{item.name}</span>
       <span>{item.price} dh</span>
       <input type="button"value="+"onClick={() => setCounter(prev => prev + 1)}/> <p>Count: {counter}</p>  
       <input type="button" value="Cart" onClick={()=>addToCart(item)} />
       <input type="button" value="fav" onClick={()=>addToFavorit(item)} />
        <Link to={`/detail/${item.id}`}>detail</Link>
        
    
    
    
    </>
)
}
export default ProductCard;