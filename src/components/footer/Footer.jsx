import "./Footer.css"
import footer_logo from "../../assets/images/header_logo.png"
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_group">
        <div className="footer_logo">
          <img src={footer_logo} alt="" className="footer_logo" />
          <p className="footer_text">2020 © Mannex Все права защищены

            Публичная оферта</p>
        </div>
        <div className="footer_title">
          <p className="footer_text2">Основное</p>
          <ul className="footer_item">
            <li className="footer_item_text"><a href="/">Главная</a></li>
            <li className="footer_item_text"><a href="/pro_zabros">О компании</a></li>
            <li className="footer_item_text"><a href="/pro_zabros">Pro-Запрос</a></li>
            <li className="footer_item_text"><a href="/garaj">Гараж</a> </li>
            <li className="footer_item_text"><a href="kontact">Контакты</a></li>
            <li className="footer_item_text"><a href="zakas">Заказы</a></li>
          </ul>
        </div>
        <div className="footer_title2">
          <p className="footer_text2">Аккаунт</p>
          <ul className="footer_item">
            <li className="footer_item_text">Корзина</li>
            <li className="footer_item_text">Баланс</li>
            <li className="footer_item_text">Мои заказы</li>
            <li className="footer_item_text">Запрос продавцу</li>
            <li className="footer_item_text">Сравнение</li>
          </ul>
        </div>
        <div className="footer_title3">
          <p className="footer_text2">Контакты</p>
          <div className="footer_xat">
            <SlEnvolope /> <p className="footer_text3"><a href="/">Главная</a></p>
          </div>
          <div className="footer_xat">
            <FaPhoneAlt />
            <div className="tlar">
              <p className="footer_text3"><a href="tel:" className="tel">8 900 203 8088</a></p>
              <br />
              <p className="footer_text3"><a href="tel:" className="tel">8 912 294 5345</a></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer