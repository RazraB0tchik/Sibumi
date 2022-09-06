import React from 'react';
import CardElement from "./CardMenu"
const PageWithPosition = ({variant_menu, page}) => {
    return (
        <div className="page_with_positionElem">
            {variant_menu.map(element => <CardElement element={element} key={element.id} page={page}/>)}
        </div>
    );
};

export default PageWithPosition;