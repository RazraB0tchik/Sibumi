import React, {useState} from 'react';
import CardElement from "./CardMenu"
import {store} from "../Pages/CalculateBasket";
import {Provider} from "react-redux";
const PageWithPosition = ({variant_menu, page}) => {
    console.log(variant_menu + " asd");

    variant_menu.forEach(elem=>{
        console.log(elem.id+ elem.text_elem + " elemPagepoll");
    })
    return (
        <div className="page_with_positionElem">
            {variant_menu.map(element=>
                <Provider store={store}>
                    <CardElement element={element} key={element.id} page={page}/>
                </Provider>)}
        </div>
    );
};

export default PageWithPosition;