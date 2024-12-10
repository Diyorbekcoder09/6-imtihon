import "./Glavniy.css"
import rasm from "../../assets/images/main_temir.png"
import section_img from "../../assets/images/usta.png"
import balon from "../../assets/images/balon.png"
import kalit from "../../assets/images/kalit.png"
import deska from "../../assets/images/deska.png"
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Glavniy = () => {
  return (
    <div className="container">

      <main className="main">
        <img src={rasm} alt="" className="main_temir" />
        <div className="main_title">
          <p className="main_text">
            Предлагаем только качественные<span> запчасти</span> для иномарок
          </p>
          <div className="guruh">
            <button className="main_btn">
              Посмотреть каталог
            </button>
            <p className="main_pech">Более 50 товаров</p>
          </div>
        </div>
        <div className="main_imgs">
          <button className="main_arrow"><IoIosArrowBack /></button>
          <button className="main_arrow2"><IoIosArrowForward /></button>
          <img src={balon} alt="" className="balon" />
          <p className="main_pech2"><p className="p1">01</p>/08</p>
        </div>
      </main>
      <div className="main_btnlar">
        <button className="main_btn2">Высокое качество</button>
        <button className="main_btn2">Лучшие на рынке</button>
        <button className="main_btn2">Большой выбор</button>
      </div>
      <section className="section">
        <div className="orqa_fon">
          <p className="section_pech">o компании</p>
        </div>
        <div className="section_guruh">
          <div className="section_title">
            <p className="section_text">
              Компания Mannex: продажа запчастей и аксессуаров высокого качества
              <br />
              <br />
              Компания Mannex начала свою деятельность недавно, но уже успела заслужить хорошую репутацию среди покупателей. Количество положительных отзывов в адрес нашей компании от благодарных клиентов растет с каждым днем. В нашем интернет-магазине вы можете купить необходимые запчасти и аксессуары для своего автомобиля по выгодным ценам.
              <br />
              <br />
              Большой ассортимент
              <br />
              <br />
              В каталоге нашего магазина вы найдете автозапчасти для Lexus, Mazda или иных автомобилей. Среди широкого ассортимента
            </p>
            <button className="section_btn">
              Читать дальше
            </button>
          </div>
          <img src={section_img} alt="" className="section_img" />
          <img src={kalit} alt="" className="kalit" />
        </div>
        <div className="orqa_fon2">
          <p className="section_pech2">Каталог</p>
        </div>
      </section>
      <section className="section2">

        <ul className="section_item">
          <li className="section_item_text">Шини</li>
          <li className="section_item_text">Диски</li>
          <li className="section_item_text">Аксессуары</li>
          <li className="section_item_text">Каталог ТО</li>
          <li className="section_item_text2">Масла и автохимия</li>
          <li className="section_item_text2">Аккумуляторы</li>
          <li className="section_item_text">Колпаки</li>
          <li className="section_item_text">Болты, гайки</li>
        </ul>

        <div className="card_group">
          <div className="royxat">
            <p className="royxat_text">Тип</p>
            <div className="now">
              <p className="r_text">Летние</p>
              <IoIosArrowDown />
            </div>
            <p className="royxat_text">Производитель</p>
            <div className="now">
              <p className="r_text">Выбраны все</p>
              <IoIosArrowDown />
            </div>
            <p className="royxat_text">Размер</p>
            <div className="now">
              <p className="r_text">Выбраны все</p>
              <IoIosArrowDown />
            </div>
            <p className="royxat_text">Диаметр</p>
            <div className="now">
              <p className="r_text">Выбраны все</p>
              <IoIosArrowDown />
            </div>
            <button className="royxat_btn">
              Подобрать
            </button>
          </div>
          <div className="cards">
            <div className="card">
              <img src={balon} alt="" className="card_img" />
              <p className="card_text">Michelin</p>
              <p className="card_text2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
              <div className="card_btnlar">
                <button className="card_btn">990р.</button>
                <button className="card_btn2"><FaMinus className="minus" />1<FaPlus className="plus" /></button>
                <MdShoppingCart className="shop2" />
              </div>
            </div>
            <div className="card">
              <img src={balon} alt="" className="card_img" />
              <p className="card_text">Michelin</p>
              <p className="card_text2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
              <div className="card_btnlar">
                <button className="card_btn">990р.</button>
                <button className="card_btn2"><FaMinus className="minus" />1<FaPlus className="plus" /></button>
                <MdShoppingCart className="shop2" />
              </div>
            </div>
            <div className="card">
              <img src={balon} alt="" className="card_img" />
              <p className="card_text">Michelin</p>
              <p className="card_text2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
              <div className="card_btnlar">
                <button className="card_btn">990р.</button>
                <button className="card_btn2"><FaMinus className="minus" />1<FaPlus className="plus" /></button>
                <MdShoppingCart className="shop2" />
              </div>
            </div>
            <div className="card">
              <img src={balon} alt="" className="card_img" />
              <p className="card_text">Michelin</p>
              <p className="card_text2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
              <div className="card_btnlar">
                <button className="card_btn">990р.</button>
                <button className="card_btn2"><FaMinus className="minus" />1<FaPlus className="plus" /></button>
                <MdShoppingCart className="shop2" />
              </div>
            </div>
            <div className="card">
              <img src={balon} alt="" className="card_img" />
              <p className="card_text">Michelin</p>
              <p className="card_text2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
              <div className="card_btnlar">
                <button className="card_btn">990р.</button>
                <button className="card_btn2"><FaMinus className="minus" />1<FaPlus className="plus" /></button>
                <MdShoppingCart className="shop2" />
              </div>
            </div>
            <div className="card">
              <img src={balon} alt="" className="card_img" />
              <p className="card_text">Michelin</p>
              <p className="card_text2">Шина летняя "Primacy 3 GRNX 205/55R16 91V"</p>
              <div className="card_btnlar">
                <button className="card_btn">990р.</button>
                <button className="card_btn2"><FaMinus className="minus" />1<FaPlus className="plus" /></button>
                <MdShoppingCart className="shop2" />
              </div>
            </div>
          </div>
        </div>
      </section>
     <div className="guruh_s">
     <div className="deska">
        <img src={deska} alt="" className="oq"/>
        <div className="plar">
        <p className="son">0</p>
          <p className="son">1</p>
          <p className="son">2</p>
          <p className="son">...</p>
          <p className="son">335</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Glavniy