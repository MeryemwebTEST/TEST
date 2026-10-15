import { useParams,Link } from "react-router-dom";
import Data from './shop.js'

export default  function CartDetail(){
    const {id}=useParams()
    const item=Data.find(item=>item.id==id)

    return(
        <>
        <h2>Detail{id}</h2>
        <h3>Name:{item.name}</h3>
        <h3>Price:{item.price}</h3>
        <img src={item.imageUrl}/>
        <h3>Name:{item.name}</h3> 
        <Link to="/acceuil" >Retour</Link>       
        </>
    )
}
