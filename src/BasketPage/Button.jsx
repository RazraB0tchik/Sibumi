import React, {useState} from 'react';
import {motion} from "framer-motion";
const Button = ({props}) => {
    let prise = Number(props.order.prise);
    // eslint-disable-next-line no-unused-vars
    let nb = props.order.nb;
    // eslint-disable-next-line no-unused-vars
    let summa = Number(props.order.summa);


    const [count, setCount] = useState(1);
    const [priseRes, setPriseRes] = useState(prise);
    // eslint-disable-next-line no-unused-vars
    let num;
    function plusElement(){
        priceAccountPlus();
        nb++;
       return setCount(count+1);
    }
    function minusElement(){
        if(count>1) {
            priceAccountMinus();
            nb--;
            return setCount(count - 1);
        }
    }
    function priceAccountPlus(){
        setPriseRes(priseRes + prise);
        summa+=priseRes;

    }
    function priceAccountMinus(){
        num = prise;
        setPriseRes(priseRes - prise);
        summa-=priseRes;
    }

        return (
            <div className="Button_order_inBasket">
                <motion.div className="minus_button_order" whileHover={{opacity: 0.5}} transition={{duration: 0.3}} onClick={minusElement}>-</motion.div>
                <div className="count_order">{count}</div>
                <motion.div className="plus_button_order" whileHover={{opacity: 0.5}} transition={{duration: 0.3}} onClick={plusElement}>+</motion.div>
            </div>
        );

};

export default Button;