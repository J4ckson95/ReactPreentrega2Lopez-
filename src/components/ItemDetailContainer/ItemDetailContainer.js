import React, { useEffect, useState } from 'react';
import ItemDeatil from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../services/async-mocks';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState();

    const { itemId } = useParams()
    console.log(itemId);

    useEffect(() => {
        getProductsById(itemId).then((resp) => {
            setProducts(resp)
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return (<ItemDeatil {...products}></ItemDeatil>);
}
export default ItemDetailContainer;