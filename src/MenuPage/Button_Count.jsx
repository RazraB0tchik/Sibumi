import React from 'react';
import {useState} from "react";
import {motion} from "framer-motion";

const ButtonCount = ({ct, sum}) => {

    // let prise = props.element.prise;
    // eslint-disable-next-line no-unused-vars
    let nb = ct;
    // eslint-disable-next-line no-unused-vars
    // let summa = sum;


    const [count, setCount] = useState(1);
    // const [priseRes, setPriseRes] = useState(prise);
    // eslint-disable-next-line no-unused-vars
    // let num;
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
        // setPriseRes(priseRes + prise);
        // summa+=priseRes;

    }
    function priceAccountMinus(){
        // num = prise;
        // setPriseRes(priseRes - prise);
        // summa-=priseRes;
    }


    return (
        <div className="button_count">
            <motion.div className="plus_button" whileHover={{opacity: 0.5}} transition={{duration: 0.3}} onClick={minusElement}>-</motion.div>
            <div className="count">{count}</div>
            <motion.div className="minus_button" whileHover={{opacity: 0.5}} transition={{duration: 0.3}} onClick={plusElement}>+</motion.div>
        </div>
    );
};

export default ButtonCount;