import "./Header.css"
import header_logo from "../../assets/images/header_logo.png"
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="container">

      <div className="header">
        <img src={header_logo} alt="" className="header_logo" />

        <div className="header_linklar">
          <Link to="/">Главная</Link>
          <Link to="/pro_zabros">Рго-запрос</Link>
          <Link to="/garaj">Гараж</Link>
          <Link to="/kontact">Контакты</Link>
          <Link to="zakas">Заказы</Link>
        </div>

        <div className="header_btnlar">
          <FaCartShopping className="shop" />
          <p className="header_text">100000р.</p>
          <button className="header_btn"><FaUser /></button>
          <button className="header_btn2">Войти</button>

        </div>

      </div>

      <form action="" className="header_form">
        <input type="text" placeholder="Поиск по артикулу" required className="header_input" />
        <button className="header_input_btn">Поиск</button>

      </form>



    </div>
  )
}

export default Header