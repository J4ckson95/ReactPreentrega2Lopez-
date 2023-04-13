import CartWidget from "../CartWidget/CartWidget"
import Styled from "./navbar.module.css"
const NavBar = () => {
    return (
        <nav className={Styled.Nav}>
            <h3 className={Styled.title}>Ecommerce</h3>
            <div className={Styled.button_container}>
                <button className={Styled.button_nav}>Celulares</button>
                <button className={Styled.button_nav}>Tablets</button>
                <button className={Styled.button_nav}>Notebook</button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )

}
export default NavBar