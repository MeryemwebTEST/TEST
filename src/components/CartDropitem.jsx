import "./CartDropitem.css"
export default function CartDropitem({item}){
    return(
        <div className="cartdropitem">
            <img src={item.imageUrl}/>
            <span>{item.name}</span>
            <spam>{item.price}</spam>
        </div>
    )
}