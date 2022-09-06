import React from 'react';
import  img_in_footer from "../HeaderBlock/pictures_footer/Бразери в лого и в проекты.webp"
import  img_in_footer_png from "../HeaderBlock/pictures_footer/Бразери в лого и в проекты.png"
import {motion} from 'framer-motion'
import basket_img from "./pictures_footer/Корзина.webp";
import basket_img_png from "./pictures_footer/Корзина (1).png";
// import '../HeaderBlock/css/Logo.css'
const Logo = () => {
    return (
        <motion.div className="logotype" whileHover={{scale: 1.05}} initial={{scale: 1}}>
            <div className="inside_block_logotype_picture">

                <picture>
                    <source srcSet={img_in_footer} type="image/webp"/>
                    <source srcSet={img_in_footer_png} type="image/png"/>
                    <img className="img_footer" src={img_in_footer} alt="logotype company"/>
                </picture>

            </div>
        </motion.div>
    );
};

export default Logo;