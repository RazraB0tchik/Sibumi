import React from 'react';
import PageType from "../PageType/PageType";

const ResultWindow = ({elements, number, active}) => {
    return (
        <div className={active ? "result_window active" : "result_window"}>
            <PageType title="ЗАКАЗ ОФОРМЛЕН"/>
            <div className="finalWindow_pool">

                <div className="header_order">
                    <div className="fake_elem_basket"/>
                    <div className="titles_basket_resultWindow">
                        <h1 className="title_header_resulWindow">ВАШ ЗАКАЗ <span className="number_order">#{number}</span> ПРИНЯТ:</h1>
                        <p className="title2_header_result_form">Мы отправили письмо с деталями вашего заказа на почту. Оператор свяжется с вами в течение 15 минут</p>
                        <p className="title2_header_result_form">Состав заказа:</p>
                    </div>
                </div>

            {/*<div className="text_about_order">*/}
            {/*    <div><h1>ВАШ ЗАКАЗ #{number} ПРИНЯТ:</h1></div>*/}

            {/*    <div className="additional_information"><p>Мы отправили письмо с деталями вашего заказа на почту. Оператор свяжется с вами в течении 15 минут</p></div>*/}

            {/*    <div className="title_order_list"><p>Состав заказа:</p></div>*/}
            {/*</div>*/}

                <div className="order_points_list">
                    {elements}
                </div>

                <div className="prise_finalWindow">
                    {/*<div className="fake_element"/>*/}
                    {/*<div className="prise_info">*/}
                    {/*    <div className="main_order_block_result_window">*/}
                    {/*    <div className="order_photo"/>*/}
                    {/*    <div className="title_order_resultWindow">*/}
                    {/*    СТОИМОСТЬ ЗАКАЗА: 12000Р*/}
                    {/*    </div>*/}
                    {/*    <div className="button"/>*/}
                    {/*    <div className="prise"/>*/}
                    {/*        <div className="delete"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className= "order_card_result">
                        <div className="fake_element"/>
                        <div className="order_inside_block">
                            <div className="main_order_block_result_window">
                                <div className="title_order_resultWindow">
                                    <div className="text_order_result">
                                        <div className="text_position_order"> СТОИМОСТЬ ЗАКАЗА: 12000Р</div>
                                    </div>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </div>

    );
};

export default ResultWindow;