import React from 'react';
import img1 from "../picture_izBrazzerie/img1.webp"
import img1_png from "../picture_izBrazzerie/img1.png"
import mouse from "../picture_izBrazzerie/мышь.webp"
import mouse_png from "../picture_izBrazzerie/мышь.png"
import {motion} from "framer-motion"
const BlockOne = ({state}) => {
    return (
        <div className="block1">
            <div className="titles">
                <motion.div className="titles_blue_background" initial={{height: "100vh"}} animate={{height:"65%"}} transition={{duration: 1}}>
                    <div className="mainBlock_with_title_one">
                        <motion.div className="title_one" initial={{y: "-100%"}} animate={{y: 0}} transition={{duration: 1, delay: 1}}><h1 className="text_title">SIBUMI</h1></motion.div>
                    </div>

                    <div className="mainBlock_with_title_two">
                          <motion.div className="title_two" initial={{y: "-100%"}} animate={{y: 0}} transition={{duration: 1, delay: 1.5}}><h1 className="text_title_two">KONDIT</h1><h1 className="gold_letter">ORIA</h1></motion.div>
                    </div>
                </motion.div>
                <motion.div className="title_gold_background" initial={{y: "-100%", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, delay: 1.5}}>
                    <motion.div className="title_three" initial={{y: "-100%"}} animate={{y: 0}} transition={{duration: 1, delay: 2}}><h1 className="text_title">IZ BRASSERIE</h1></motion.div>
                </motion.div>
            </div>
            <div className="photo_background">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}

                <picture>
                    <source srcSet={img1} type="image/webp"/>
                    <source srcSet={img1_png} type="image/png"/>
                    <img className="background_img" src={img1} alt="background photo"/>
                </picture>
                <motion.div className={state < 1200 ? "prompt_notActive" : "prompt"} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 3}}>
                    <motion.div className="block_with_mousePicture" animate={{y:[11, -5, 11]}} transition={{duration: 3, delay: 3 ,repeat: Infinity}}>

                        <picture>
                            <source srcSet={mouse} type="image/webp"/>
                            <source srcSet={mouse_png} type="image/png"/>
                            <img className="mouse" src={mouse} alt="mouse"/>
                        </picture>
                    </motion.div>
                    <div  className="prompt_text">
                        <p>ЗАКАЗАТЬ В ОДНУ ДОСТАВКУ</p>
                    </div>
                </motion.div>
                </div>
        </div>
    );
};

export default BlockOne;