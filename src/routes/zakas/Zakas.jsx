import "./Zakas.css"

const Zakas = () => {
  return (
    <div className='container'>

      <p className="zakas_text">Страница авторизации в личный кабинет</p>
      <p className="zakas_text2">Доступ на страницу заказов доступен только для зарегистрированных пользователей</p>
      <form className="zakas_form">
        <input type="email" required placeholder="E-mail" className="zakas_input" />
        <input type="password" required placeholder="Пароль" className="zakas_input" />
        <button className="zakas_btn">Войти</button>
        <p className="pech10">Ещё не зарегистрированы?
          <p className="green">Зарегистрироваться</p>
        </p>
      </form>

    </div>
  )
}

export default Zakas