import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../services/getData';
import Styled from "./itemlistcontainer.module.css"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((resp) => {
            setProducts(resp)
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <div>
            <h1>{greeting}</h1>
            <div className={Styled.container}><ItemList products={products}></ItemList></div>

        </div>
    )

}
export default ItemListContainer