import React from 'react';
import '../ContactPage/css/Contacts.css';
import RestoranCard from "../ContactPage/RestoranCard";
import '../fonts/fonts.css'
import "../ContactPage/css/Form.css"
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType";
import Footer from "../Footer/Footer";
import logotype_sibumi from "../ContactPage/pictures/SIIbumi_kofeyny.webp"
import logotype_sibumi_png from "../ContactPage/pictures/SIIbumi_kofeyny.png"
import logotype_konditoria from "../ContactPage/pictures/konditor_kofeyny.webp"
import logotype_konditoria_png from "../ContactPage/pictures/konditor_kofeyny.png"
import logotype_brasserie from "../ContactPage/pictures/cofee_logo_iz_beazzerie.webp"
import logotype_brasserie_png from "../ContactPage/pictures/cofee_logo_iz_beazzerie.png"
import '../fonts/fonts.css'
const OntactsPage = () => {


    let cards = [
        {id:1, logotype_picture: logotype_sibumi, logotype_picture_png: logotype_sibumi_png, street:"ул. Пограничная 21", phone:"+7(432)000-00-00", workdaysOne:"Пн-сб: 12:00-22:00", workdaysTwo:"Сб-вс: 20:00-04:00", name:"button1", textStyle: "information_about_point", pointStyle: "points_first_rest"},
        {id:2, logotype_picture: logotype_konditoria, logotype_picture_png: logotype_konditoria_png, street:"ул. Пограничная 21", phone:"+7(432)000-00-00", workdaysOne:"Пн-сб: 12:00-22:00", workdaysTwo:"Сб-вс: 20:00-04:00", name:"button2", textStyle: "information_about_point", pointStyle: "points_first_rest"},
        {id:3, logotype_picture: logotype_brasserie, logotype_picture_png: logotype_brasserie_png, street:"ул. Пограничная 21", phone:"+7(432)000-00-00", workdaysOne:"Пн-сб: 12:00-22:00", workdaysTwo:"Сб-вс: 20:00-04:00", name:"button3", textStyle: "information_about_point", pointStyle: "points_first_rest"},
    ]

    return (
        <div className="contacts">

            <Header bold_block={2} style_element="main_style"/>

            <div className="mainFieldService_Contact">
                <PageType title="КОНТАКТЫ"/>


                <div className="restorans">
                    {cards.map(card => <RestoranCard card={card} key={card.id}/>)}
                </div>

                <div className="footer">
                    <Footer/>
                </div>

            </div>

        </div>
    );
};

export default OntactsPage;