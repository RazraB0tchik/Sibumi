import React, {useState} from 'react';
import Img from "./Img";

const LineImg = ({line}) => {
    const [activeImg, setActiveImg] = useState(false);
    return (
        <div className={activeImg && (window.innerWidth>800) ? "block_with_pictures_not_active" : "block_with_pictures"}>
        <div className="pool_with_img">
            {line.map(photo => <Img active = {activeImg} setActive = {setActiveImg} photo={photo} key={photo.id}/>)}
        </div>
        </div>
    );
};

export default LineImg;