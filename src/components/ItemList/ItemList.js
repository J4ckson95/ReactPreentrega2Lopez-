import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((data) => <Item key={data.id} {...data}></Item>)}
        </>
    );
}
export default ItemList;