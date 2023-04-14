import React, { useEffect, useState } from 'react';
import ItemDeatil from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../services/getData';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        getProductsById(1).then((resp) => {
            setProducts(resp)
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return (<ItemDeatil {...products}></ItemDeatil>);
}
export default ItemDetailContainer;