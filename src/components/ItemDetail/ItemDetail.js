import React from 'react'
import Styled from "./itemdetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDeatil = ({ id, name, img, price, stock, category }) => {
    return (
        <article className={Styled.container}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img className={Styled.picture} src={img} alt={name}></img>
            </picture>
            <section>
                <p>Precio : {price}</p>
                <p>Categoria : {category}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log(quantity)}></ItemCount>
            </footer>
        </article>
    );
}
export default ItemDeatil;