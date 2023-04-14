import React, { useState } from 'react';
import Styled from "./itemcount.module.css"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const Increment = () => {
        if (quantity < stock) setQuantity(quantity + 1)
    }
    const Decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }
    return (
        <div className={Styled.box}>
            <div className={Styled.container}>
                <button className={Styled.button_count} onClick={Decrement}>-</button>
                <h4 className={Styled.text}>{quantity}</h4>
                <button className={Styled.button_count} onClick={Increment}>+</button>
            </div>
            <div>
                <button className={Styled.button_count} onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;