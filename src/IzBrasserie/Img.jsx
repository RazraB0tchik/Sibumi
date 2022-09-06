import React, {useState} from 'react';
import ImgOnAllWindow from "./ImgOnAllWindow";
import {motion} from "framer-motion";
import scooter from "../picture_izBrazzerie/scooter.webp";
import scooterPNG from "../picture_izBrazzerie/scooter.png";
const Img = (props) => {
    const[activeModul, setActiveModul] = useState(false);

    const setParams = () =>{
        if(window.innerWidth>800) {
            setActiveModul(!activeModul);
            props.setActive(!props.active);
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <div className="allPictures">
        <motion.div onClick={setParams} className="picture" initial={{x:0}} animate={{x:"-5330px"}} transition={{duration: 100 , repeat: Infinity, ease: "linear"}}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}

            <picture>
                <source srcSet={props.photo.img} type="image/webp"/>
                <source srcSet={props.photo.img_png} type="image/png"/>
                <img className="img" src={props.photo.img} alt="picture"/>
            </picture>

        </motion.div>
            <ImgOnAllWindow activePool={props.setActive} active={activeModul} setActive={setActiveModul} img={props.photo.img} img_png={props.photo.img_png}/>
        </div>
    );
};

export default Img;