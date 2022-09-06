import React from 'react';
import close_picture from "../HeaderBlock/pictures_footer/в корзине (1).webp"
import close_picture_png from "../HeaderBlock/pictures_footer/в корзине (1).png"
import Button from "./Button";
import {motion} from "framer-motion";
import img1 from "../picture_izBrazzerie/img1.webp";
import img1_png from "../picture_izBrazzerie/img1.png";

const OrderCard = (props) => {

    // const deleteElements = (element) => {
    //     setElements(element.filter(p => p !== element));
    // };
    console.log(props.order.id);
    function checkOnLastElement(){
        return props.order.id === props.masline;
    }
    return (
        <div className= "order_card">
            <div className="fake_element"/>
            <div className="order_inside_block">
                <div className={checkOnLastElement() ? "order_card_last" :"main_order_block"}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <div className="order_photo">
                <img className="order_picture_inside_block" src={props.order.img} alt="photo order"/>

                <picture>
                    <source srcSet={props.order.img} type="image/webp"/>
                    <source srcSet={props.order.img_png} type="image/png"/>
                    <img className="order_picture_inside_block" src={props.order.img} alt="photo order"/>
                </picture>

            </div>
            <div className="title_order">
            <div className = "title_element_order">Название</div>
            <div className="text_order">
                <div className="text_position_order">{props.order.text}</div>
            </div>
            </div>
            <div className="button">
                <div className = "title_element_order_count">Кол-во</div>
                <Button props={props}/>
            </div>

            <div className="title_order_MobileVersion">
                <h3 className="text_order">{props.order.text}</h3>
                <div className="buttonMobile"><Button props={props}/></div>
            </div>

            <div className="prise">
                <div className = "title_element_order_prise">Цена</div>
                 <h3 className="title_prise">{props.order.prise}</h3>
            </div>

            <div className="delete">
                <motion.div className="block_for_close_button_order" whileHover={{opacity: 0.5}} transition={{duration: 0.3}}>

                    <picture>
                        <source srcSet={close_picture} type="image/webp"/>
                        <source srcSet={close_picture_png} type="image/png"/>
                        <img className="close_picture_order" src={close_picture} alt="close_img"/>
                    </picture>

                </motion.div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;