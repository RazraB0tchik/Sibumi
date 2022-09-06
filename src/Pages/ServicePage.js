import '../ServicePage/css/ServicePage.css';
import React from 'react';
import img_scooter from "../picture_izBrazzerie/scooter.webp";
import img_scooter_png from "../picture_izBrazzerie/scooter.png";
import ArrayOfBlocks from "../ServicePage/ ArrayOfBlocks";
import '../fonts/fonts.css'
import Header from "../HeaderBlock/Header"
import PageType from "../PageType/PageType"
import Footer from "../Footer/Footer"
const ServicePage = () => {
    return (
        <div className="servicePage">

            <Header bold_block={2} style_element="main_style"/>

            <div className="service_main_pool">
            <PageType title="СЕРВИСНАЯ СТРАНИЦА ОПЛАТЫ"/>

                <div className="mainFieldService_Service">
                <ArrayOfBlocks img_title={img_scooter} img_title_png={img_scooter_png}/>

                </div>

                <div className="footer">
                    <Footer/>
                </div>

            </div>

        </div>
    );
};

export default ServicePage;