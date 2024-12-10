import "./Pro_zabros.css"

const Pro_zabros = () => {
    return (
        <div className='container'>
            <p className="zabros_text">Запрос продавцу</p>
            <form className="section_form">

                <p className="form_text">Ваши данные</p>
                <div className="inputs">
                    <input type="text" className="input1" required placeholder='Фамилия Имя Отчество' />
                    <input type="text" className="input1" required placeholder='Ваш город' />
                    <input type="tel" className="input1" required placeholder='Ваш телефон' />
                </div>

                <p className="form_text">Об иномарке</p>
                <div className="inputs2">
                    <input type="text" required placeholder="Марка" className="input2" />
                    <input type="text" required placeholder="Модель" className="input2" />
                    <input type="text" required placeholder="Год выпуска" className="input2" />
                    <input type="text" required placeholder="Объём двигателя" className="input2" />
                    <input type="text" required placeholder="*VIN/FRAME-код**	" className="input2" />
                    <input type="text" required placeholder="Тип КПП" className="input2" />
                </div>
                <div className="inputs3">
                    <input type="text" className="input1" placeholder="Тип кузова/число дверей" required />
                    <input type="text" className="input1" placeholder="Привод" required />
                </div>

                <p className="form_text">Необходимые запчасти</p>
                <input type="text" placeholder="Напишите какие детали вас инетерсуют" required className="input3" />
                <div className="hed">
                <button className="btn2">Оставить заявку</button>
                <p className="form_text2">Нажимая кнопку “Оставить заявку” вы примимаете нашу
                    <p className="red">политику конфиденциальности</p></p>
                </div>
            </form>





        </div>
    )
}

export default Pro_zabros