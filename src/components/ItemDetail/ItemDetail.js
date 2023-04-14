import React from 'react'
import Styled from "./itemdetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDeatil = ({ id, name, img, price, description, category }) => {
    return (
        <article className={Styled.container}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img className={Styled.picture} src={img} alt={name}></img>
            </picture>
            <section>
                <p>Categoria : {category}</p>
                <p>Descripción : {description}</p>
                <p>Precio : {price}</p>

            </section>
            <footer>
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log(quantity)}></ItemCount>
            </footer>
        </article>
    );
}
export default ItemDeatil;