import Data from "../shop.js";
import Card from "../components/item-card.jsx"

function  Acceuil({addToCart,addToFavorit}) {


    return(
        <div className="acceuil">
        { Data.map((item) =>( <Card   item={item} addToCart={addToCart}  addToFavorit={addToFavorit}/>))}
        </div>
    )
}

export default Acceuil;