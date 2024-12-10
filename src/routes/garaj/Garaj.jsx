import "./Garaj.css"
import car from "../../assets/images/car.png"

const Garaj = () => {
  return (
    <div className="container">
      <p className="garaj_text">Гараж</p>

      <div className="head">
        <button className="garaj_btn">
          Добавить новый автомобиль
        </button>
        <img src={car} alt="" className="car" />
      </div>

    </div>
  )
}

export default Garaj