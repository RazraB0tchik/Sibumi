import React, {useState} from 'react';
import '../fonts/fonts.css'
// import {Dimensions} from "react-native-web";
import '../IzBrasserie/css/IzBrasserie.css'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType"
import Information from "../IzBrasserie/Information";
import img_one from "../picture_izBrazzerie/img1.webp";
import img_one_png from "../picture_izBrazzerie/img1.png";
import img_two_slider from "../picture_izBrazzerie/img2.webp";
import img_two_slider_png from "../picture_izBrazzerie/img2.png";
import img_three_slider from "../picture_izBrazzerie/img3.webp";
import img_three_slider_png from "../picture_izBrazzerie/img3.png";
import img_four_slider from "../picture_izBrazzerie/img4.webp";
import img_four_slider_png from "../picture_izBrazzerie/img4.png";
import img_on_history from "../picture_izBrazzerie/img2.webp";
import img_on_history_png from "../picture_izBrazzerie/img2.png";
import img_for_legend from "../picture_izBrazzerie/img7.webp"
import img_for_legend_png from "../picture_izBrazzerie/img7.png"
import HistoryAndLegend from "../IzBrasserie/HistoryAndLegend";
import HistoryImg from "../IzBrasserie/HistoryImg";
import DelivaryComponent from "../IzBrasserie/DelivaryComponent";
// import Slider from "./Slider";
import Footer from "../Footer/Footer"
import LineImg from "../IzBrasserie/LineImg";
import Slider from "./Slider";
import {Dimensions} from "react-native-web";
import pic1 from "../picture_izBrazzerie/mini_one.png";
import pic2 from "../picture_izBrazzerie/mini_two.png";
import pic3 from "../picture_izBrazzerie/mini_third.png";
import pic4 from "../picture_izBrazzerie/mini_fours.png";
import pic5 from "../picture_izBrazzerie/mini_fives.png";
import pic6 from "../picture_izBrazzerie/mini_six.png";
import pic7 from "../picture_izBrazzerie/mini_seven.png";
import pic8 from "../picture_izBrazzerie/mini_eight.png";
import pic9 from "../picture_izBrazzerie/mini_nine.png";
import pic10 from "../picture_izBrazzerie/mini_ten.png";
import pic11 from "../picture_izBrazzerie/mini_eleven.jpg";
import pic12 from "../picture_izBrazzerie/mini_twelve.png";
import pic13 from "../picture_izBrazzerie/mini_thirteen.png";
const IzBrasserie = () => {

    // eslint-disable-next-line no-undef
    const [state, setState] = useState(Dimensions.get('window').width);
    window.addEventListener('resize', update);
    function update() {
        setState(window.innerWidth);
    }

    let lines = [
        {id: 1, signature: "Здесь будет какой-то текст"},
        {id: 2, signature: "Здесь будет какой-то текст, не длиннее 300 символов"},
        {id: 3, signature: "Здесь будет какой-то текст"},
    ]

    let delivery = [
        {id: 1, text:"Здесь говорится, как ресторан .", style_delivery: "delivery_block1"},
        {id: 2, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block2"},
        {id: 3, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block3"},
    ]

    let pictures = [
        {id: 1, img: pic1, nmb: 1},
        {id: 2, img: pic2, nmb: 2},
        {id: 3, img: pic3, nmb: 3},
        {id: 4, img: pic4, nmb: 4},
        {id: 5, img: pic5, nmb: 5},
        {id: 6, img: pic6, nmb: 6},
        {id: 7, img: pic7, nmb: 7},
        {id: 8, img: pic8, nmb: 8},
        {id: 9, img: pic9, nmb: 9},
        {id: 10, img: pic10, nmb: 10},
        {id: 11, img: pic11, nmb: 11},
        {id: 12, img: pic12, nmb: 12},
        {id: 13, img: pic13, nmb: 13},
        {id: 14, img: pic1, nmb: 14},
        // {id: 15, img: pic2, nmb: 15},
        // {id: 16, img: pic3, nmb: 1},
    ]

    return (
        <div className="App">

            <link rel="preload" as="image" href={img_one}/>

            <Header bold_block={1} style_element="main_style"/>

            <div className="mainField">

                <PageType title="О ПРОЕКТЕ IZ BRASSERIE"/>

                <Information lines={lines}/>

                <div className="history">
                    <HistoryImg history_or_legend_img={img_on_history} text1="в поиске" text2="вкуса" legend={0}/>

                    <HistoryAndLegend text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                      title={"ИСТОРИЯ"} legend={0}/>
                </div>

                    <LineImg line={pictures}/>


                <div className="delivery">
                    {delivery.map(element => <DelivaryComponent element={element} key={element.id}/>)}
                </div>

                <div className="legend">
                    <HistoryAndLegend text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in."}
                                      title={"ЛЕГЕНДА БРЕНДА"} legend={1}/>
                    <HistoryImg history_or_legend_img={img_for_legend} legend={1}/>
                </div>


            {/*    /!*<div className="personal">*!/*/}
            {/*    /!*    <Slider width_window={state}/>*!/*/}
            {/*    /!*</div>*!/*/}

                <div className="footer">
                    <Footer/>
                </div>

            </div>
        </div>
    );
};

export default IzBrasserie;