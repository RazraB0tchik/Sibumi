import React, {useState} from 'react';
import img_on_basket from '../picture_izBrazzerie/img3.webp'
import img_on_basket_png from '../picture_izBrazzerie/img3.png'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType";
import OrderCard from "../BasketPage/OrderCard";
import "../BasketPage/css/ResultForm.css"
import {motion} from "framer-motion";
import ButtonsOrder from "../BasketPage/ButtonsOrder";
import "../BasketPage/css/Basket.css"
import "../BasketPage/css/Forms.css"
import ResultWindow from "../BasketPage/ResultWindow";
const BasketPage = () => {

    const [activeWindow, setActiveWindow] = useState(false);

    const[element, setElements]=useState([
        {id: 1, img: img_on_basket, img_png: img_on_basket_png, text: "САШИМИ С ТУНЦОМ ЫФВЫФ", prise: "2100 Р", nb: 0, summa: 0},
        {id: 2, img: img_on_basket, img_png: img_on_basket_png, text: "САШИМИ С ТУНЦОМ", prise: "2100 Р", nb: 0, summa: 0},
        {id: 3, img: img_on_basket, img_png: img_on_basket_png, text: "САШИМИ С ТУНЦОМ", prise: "2100 Р", nb: 0, summa: 0},
        // {id: 4, img: img_on_basket, text: "САШИМИ С ТУНЦОМ", prise: "2100 Р", nb: 0, summa: 0},
        // {id: 5, img: img_on_basket, text: "САШИМИ С ТУНЦОМ", prise: "2100 Р", nb: 0, summa: 0},
        // {id: 6, img: img_on_basket, text: "САШИМИ С ТУНЦОМ", prise: "2100 Р", nb: 0, summa: 0},
        // {id: 7, img: img_on_basket, text: "САШИМИ С ТУНЦОМ", prise: "2100 Р", nb: 0, summa: 0},
    ]);
    let mp = element.map(order => <OrderCard  masline = {element.length}  order={order} key={order.id}/>);

    const[activeLastWindow, setActiveLastWindow] = useState(false);

    return (
        <div className="Basket">

            <Header style_element="main_style"/>

            <div className= {activeLastWindow ? "mainFieldServiceBasket_notActive" : "mainFieldServiceBasket"}>
                <PageType title="ВАША КОРЗИНА"/>
                    <div className={activeWindow ? "insideWindow active" : "insideWindow"}>
                        <div className="header_order">
                            <div className="fake_elem_basket"/>
                            <div className="titles_basket">
                            <h1 className="title_header">ВЫ ВЫБРАЛИ:</h1>
                            <p className="title2_header">Осталось проверить заказ</p>
                            </div>
                        </div>

                        <div className="positions_order_titles">
                        <div className="fake_element"/>
                            <div className="order_inside_block">
                        <div className="titles_points_order">
                            <div className="photo_point"/>
                            <div className="name_point">Название</div>
                            <div className="count_point">Кол-во</div>
                            <div className="prise_point">Цена</div>
                            <div className="delete_point"/>
                        </div>
                            </div>
                        </div>

                        <div className="order_elements_container">
                        {mp}
                        </div>
                        <motion.div className="line_with_ItogPrise">
                            <div className="text_in_border"><div className="prise_line_result"><div className="text_result">СТОИМОСТЬ ЗАКАЗА: <span className="prise_text"> 12 000 Р</span></div></div></div>
                            <div onClick={()=>setActiveWindow(true)} className="button_result"><motion.button whileHover={{backgroundColor: "white", color: "rgb(206, 189, 160)"}} transition={{duration: 0.7}} className="button_order_result">ОФОРМИТЬ ЗАКАЗ</motion.button></div>
                        </motion.div>
                    </div>



                {/*окно с формами*/}
                <div className={(activeWindow ? "pool_with_forms active" : "pool_with_forms")}>
                    <div className="main_form_inside_block">
                    <div className="form_one">
                        <form className="main_form_block_one">
                            <div className="title_form_one">
                                <div className="first_title"><span className="number_title_first_title">01/</span>ДАННЫЕ ДОСТАВКИ:</div>
                                <div className="second_title"> У нас есть пара вопросов:</div>
                            </div>

                            <ButtonsOrder type="takeOrder"/>
                            <ButtonsOrder type="timeOrder"/>
                            <ButtonsOrder type="payOrder"/>

                            <div className="comments">
                                <div className="title_comment">Хотите оставить комментарий?</div>
                                <div className="input_one">
                                    <input className="text_input_one" type="text" placeholder="ХОЧУ КАК В ЯПОНИИ"/>
                                </div>
                            </div>

                            <ButtonsOrder type="otherQuestions"/>
                        </form>
                    </div>


                    <div className="form_two">
                        <form className="main_form_block_one">
                            <div className="title_form_two">
                                <div className="first_title"><span className="number_title_first_title">02/</span>КОНТАКТНЫЕ ДАННЫЕ:</div>
                                <div className="second_title"> Уточните, куда привезти заказ:</div>
                            </div>

                            <ButtonsOrder type="contactForm"/>
                        </form>
                    </div>
                    </div>
                </div>
                <div className={activeWindow ? "line_with_ItogPrise" : "line_with_ResultForm notActive"}>
                    <div onClick={()=>setActiveWindow(false)} className="text_in_border_result">
                        <motion.button whileHover={{opacity: 0.5}} className="go_back_button">ЧТО Я ВЫБРАЛ?</motion.button>
                    </div>

                        <div className="button_result"><motion.button onClick={()=>setActiveLastWindow(true)} whileHover={{backgroundColor: "white", color: "rgb(206, 189, 160)"}} transition={{duration: 0.7}} className="button_order_result">ОФОРМИТЬ ЗАКАЗ</motion.button></div>
                </div>
            </div>
            <ResultWindow active={activeLastWindow} elements={mp} prise="12000" number="00045"/>

        </div>

    );
}

export default BasketPage;