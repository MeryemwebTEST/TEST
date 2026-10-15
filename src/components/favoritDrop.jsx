import './cartDrop.css'
import CartDropitem from './CartDropitem'
export default function FavoritDrop({ fav }){
    return(
        <div className='cartdrop'>
       {
         fav.length>0?fav.map
                  (item=><CartDropitem item={item}/>):<h3>No Data</h3>  
        }
        </div>
    )
}