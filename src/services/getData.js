const products = [
    {
        id: 1, name: "Iphone 12", price: 1000, category: "celular", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtBM0isxiMtYDKGfclHBWtEkj4ctNn7ryJA&usqp=CAU", stock: 25, description: "Descripción del Iphone 12"
    },
    {
        id: 2, name: "Samsung S21", price: 800, category: "celular", img: "https://falabella.scene7.com/is/image/FalabellaCO/50392444_1?wid=800&hei=800&qlt=70", stock: 20, description: "Descripción del Samsung S21"
    },
    {
        id: 3, name: "Ipad 8va Generación", price: 1200, category: "tablet", img: "https://www.merkadotecno.com/wp-content/uploads/2021/04/ipad-8.jpg", stock: 10, description: "Descripción del Samsung S21"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (ID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === ID))
        }, 500)
    })
}