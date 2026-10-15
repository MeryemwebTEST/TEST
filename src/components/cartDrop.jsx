import './cartDrop.css'
import CartDropitem from './CartDropitem'
export default function CartDrop({Cart}){
    return(
        <div className="cartdrop">
       {console.log(Cart)}
      { Cart.length>0?Cart.map
        (item=><CartDropitem item={item}/>):<h3>No Data</h3>

    }
        </div>
    )
}