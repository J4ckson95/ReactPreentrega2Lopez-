import React from 'react';
import Styled from "./item.module.css"
import { Link, useParams } from 'react-router-dom';

const Item = ({ id, name, price, category, img, stock }) => {
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
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <Link className={Styled.button} to={`/item/${id}`}>Ver Detalles</Link>
            </footer>
        </article>
    );
}
export default Item;