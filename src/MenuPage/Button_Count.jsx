import React from 'react';
import {useState} from "react";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";

const ButtonCount = ({name, img, price, id}) => {

    const [countAdd, setCountAdd] = useState(1);
    const dispatch = useDispatch()
    // const elemList = useSelector(state => state)

    function plusElement(){
        setCountAdd(countAdd+1);
        dispatch({type: "UPDATE_ELEM", id: id})
    }
    function minusElement(){
        if(countAdd>1) {
            setCountAdd(countAdd-1);
            dispatch({type: "DELETE_ELEM", id: id})
        }
    }


    return (
        <div className="button_count">
            <motion.div className="plus_button" whileHover={{opacity: 0.5}} transition={{duration: 0.3}} onClick={minusElement}>-</motion.div>
            <div className="count">{countAdd}</div>
            <motion.div className="minus_button" whileHover={{opacity: 0.5}} transition={{duration: 0.3}} onClick={plusElement}>+</motion.div>
        </div>
    );
};

export default ButtonCount;