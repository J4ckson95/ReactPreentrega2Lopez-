import CartWidget from "../CartWidget/CartWidget"
import Styled from "./navbar.module.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className={Styled.Nav}>
            <Link to={`/`}><h3 className={Styled.title}>Ecommerce</h3></Link>
            <div className={Styled.button_container}>
                <Link to={`/category/celular`} className={Styled.button_nav}>Celular</Link>
                <Link to={`/category/tablet`} className={Styled.button_nav}>Tablets</Link>
                <Link to={`/category/notebook`} className={Styled.button_nav}>Notebook</Link>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )

}
export default NavBar