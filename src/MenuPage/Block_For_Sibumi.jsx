import React from 'react';
import LinksPool from "./Line_with_links";
import {useState} from "react";
import cardPicture from "../picture_izBrazzerie/img4.webp";
import cardPicturePng from "../picture_izBrazzerie/img4.png";
import Page_With_Position from "./Page_With_Position";
import GenerateMass from "../Pages/functions/generateMass";

const BlockForSibumi = ({stateBlock}) => {

    const[listSibumi, setlSibumi] = useState([ //наш массив, полученный из запроса
        {id: "hot", text_button: "Горячее", products: [{id: 21, name: "Горячее сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 0, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 2, name: "Горячее сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 0, img_elem: cardPicture, img_png_elem: cardPicturePng}]},
        {id: "cold", text_button: "Холодное", products: [{id: 23, name: "Холодное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 0, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 4, name: "Холодное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 0, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 5, name: "Холодное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 0, img_elem: cardPicture, img_png_elem: cardPicturePng}]},
        {id: "sushi", text_button: "Суши", products: [{id: 26, name: "Обычное суши", description: "Состав: рыба, рис", prise: "550Р", availability: 2, img_elem: cardPicture, img_png_elem: cardPicturePng}]},
        {id: "sashimi", text_button: "Сашими", products: [{id: 27, name: "Обычное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 2, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 8, name: "Обычное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 3, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 9, name: "Обычное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 1, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 10, name: "Обычное сашими", description: "Состав: рыба, рис", prise: "550Р", availability: 1, img_elem: cardPicture, img_png_elem: cardPicturePng}]},
        {id: "salad", text_button: "Салаты", products: [{id: 29, name: "Обычный салат", description: "Состав: рыба, рис", prise: "550Р", availability: 10, img_elem: cardPicture, img_png_elem: cardPicturePng}]},
        {id: "soup", text_button: "Супы", products: [{id: 32, name: "Обычный суп", description: "Состав: рыба, рис", prise: "550Р", availability: 13, img_elem: cardPicture, img_png_elem: cardPicturePng}, {id: 14, name: "Обычный суп", description: "Состав: рыба, рис", prise: "550Р", availability: 5, img_elem: cardPicture, img_png_elem: cardPicturePng}]},
    ]);

    const [active_linkElement, setActive_linkElement] = useState("hot"); //дефолтный id надо указать, который покажется первыйм (в useState)


    return (
        <div className={stateBlock ? "Sibumi_main_block" : "Sibumi_main_block_notActive"}>
            <LinksPool active={active_linkElement} setActive={setActive_linkElement} list_map={listSibumi}/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Page_With_Position variant_menu={GenerateMass(listSibumi, active_linkElement)} page={'SIBUMI'}/>
        </div>
    );
};

export default BlockForSibumi;