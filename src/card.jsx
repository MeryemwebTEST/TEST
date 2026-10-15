import { useState } from "react";



function Card({item,aadToCart,addToFavorit}){
     const [counter,setCounter]=useState(1)
           function valider(){
       setCounter(counter+1)
     }
     console.log(Card)
  return(
    <div className="itemcard" key={item.id}>
< img style={{width: '60%', height: 'auto', border:'2px black',}} src={item.imageUrl} alt={item.name} />
          
          <h3>name: {item.name}</h3>
           <p>Price: ${item.price}</p>
          <input type='button' value="card" onClick={()=>aadToCart(item)}/>
           <input type='button' value="fav" onClick={()=>addToFavorit(item)}/>
          </div>
        )
 }
export default Card;