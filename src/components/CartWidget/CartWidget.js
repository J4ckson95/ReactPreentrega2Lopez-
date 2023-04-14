import cart from "./assets/carrito-de-compras.png"
import Styled from "./cartwidget.module.css"

const CartWidget = () => {
    return (
        <div className={Styled.container}>
            <img className={Styled.img} src={cart}></img>
            <p className={Styled.text}>0</p>
        </div>
    )

}
export default CartWidget