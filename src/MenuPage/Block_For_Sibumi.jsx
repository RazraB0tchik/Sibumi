import React from 'react';
import LinksPool from "./Line_with_links";
import {useState} from "react";
import cardPicture from "../picture_izBrazzerie/img4.webp";
import cardPicturePng from "../picture_izBrazzerie/img4.png";
import Page_With_Position from "./Page_With_Position";

const BlockForSibumi = ({stateBlock}) => {

    let list_map = [
        {id: 1, text_button: "Горячее"},
        {id: 2, text_button: "Холодное"},
        {id: 3, text_button: "Суши"},
        {id: 4, text_button: "Сашими"},
        {id: 5, text_button: "Салаты"},
        {id: 6, text_button: "Супы"},
    ];

    const [listHot, setListHot] = useState([
        {id: 1, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 2, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 3, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 4, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 5, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 6, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 7, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 8, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 9, text_elem: "Горячее сашими с тунцом", prise: "550Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
    ]);

    const [listCold, setListCold] = useState([
        {id: 10, text_elem: "Холодное сашими с тунцом", prise: "650Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 11, text_elem: "Холодное сашими с тунцом", prise: "650Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 12, text_elem: "Холодное сашими с тунцом", prise: "650Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
    ]);

    const [listSushi, setListSushi] = useState([
        {id: 13, text_elem: "Суши с икрой летучей рыбы", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 14, text_elem: "Суши с икрой летучей рыбы", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 15, text_elem: "Суши с икрой летучей рыбы", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
    ]);

    const [listSashimi, setListSashimi] = useState([
        {id: 16, text_elem: "Сашими с имбирем", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 17, text_elem: "Сашими с имбирем", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 18, text_elem: "Сашими с имбирем", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 19, text_elem: "Сашими с имбирем", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 20, text_elem: "Сашими с имбирем", prise: "1050Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
    ]);

    const [listSalad, setListSalad] = useState([
        {id: 21, text_elem: "Салат цезарь", prise: "350Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 22, text_elem: "Салат цезарь", prise: "350Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 23, text_elem: "Салат цезарь", prise: "350Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
    ]);

    const [listSoup, setListSoup] = useState([
        {id: 24, text_elem: "Суп томатный", prise: "350Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 25,  text_elem: "Суп томатный", prise: "350Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
        {id: 26,  text_elem: "Суп томатный", prise: "350Р", img_elem: cardPicture, img_png_elem: cardPicturePng, nb: 0, summa: 0},
    ]);

    const selectVariant = () => {
        // eslint-disable-next-line default-case
        switch (active_linkElement) {
            case 0: return listHot;


            case 1: return listHot;


            case 2: return listCold;


            case 3: return listSushi;

            case 4: return listSashimi;

            case 5: return listSalad;

            case 6: return listSoup;

        }
    }


    const [active_linkElement, setActive_linkElement] = useState(0);


    // console.log(active_linkElement + " si")

    return (
        <div className={stateBlock ? "Sibumi_main_block" : "Sibumi_main_block_notActive"}>
            {/*<div className="links_menu">*/}
            {/*    {list_map.map(element_link => <ElementLinkList element_link={element_link} key={element_link.id} active={active_linkElement} setActive={setActive_linkElement}/>)}*/}
            {/*</div>*/}
            <LinksPool active={active_linkElement} setActive={setActive_linkElement} list_map={list_map}/>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Page_With_Position variant_menu={selectVariant()} page={'SIBUMI'}/>
        </div>
    );
};

export default BlockForSibumi;