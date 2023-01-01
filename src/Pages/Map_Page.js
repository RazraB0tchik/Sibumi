import React from 'react';
import "../MainPage/css/StartPage.css"

const MapPage = ({page_status}) => {

    return (
        <div className={page_status==="main_page" ? "map_element" : "map_element_standart"}>

            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A422ac80ec237bdc0b65e0a7681747c80ddcfc579b87035161f6b1ed45bf64bbf&amp;source=constructor"
                width="100%" height="110%" frameBorder="0"/>
        </div>
    );
};

export default MapPage;
