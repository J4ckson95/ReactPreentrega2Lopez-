import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from '../../services/getData';
import { useParams } from 'react-router-dom';
import Styled from "./itemlistcontainer.module.css"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams()

    const getdata = categoryId ? getProductsByCategory : getProducts;

    useEffect(() => {
        getdata(categoryId).then((resp) => {
            setProducts(resp)
        }).catch(err => {
            console.log(err);
        })
    }, [categoryId]);
    return (<div className={Styled.container}><ItemList products={products}></ItemList></div>)
}
export default ItemListContainer