import { useState } from "react";
import { Link } from "react-router-dom";

function Card({item,addToCart,addToFavorit}) {

    const [counter, setCounter] = useState(1) 
    function valider(){
        setCounter(counter+1)
        console.log(counter)
    }
  
    return (
        <div className="item-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} DH</p>

            <input type="button" value="addToCart" onClick={()=>addToCart(item)} /> 
            <input type="button" value="favorit" onClick={()=>addToFavorit(item)}  />
            <input type="button" value={`count:${counter}`} onClick={valider} />
            <Link to={`/detail/${item.id}`}>detail</Link>
            
        </div>
    )
}
 
export default Card;      