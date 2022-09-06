import React from 'react';
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
const IzBrasserie = () => {

    // const [state, setState] = useState(Dimensions.get('window').width);
    // window.addEventListener('resize', update);
    // function update() {
    //     setState(window.innerWidth);
    // }

    let lines = [
        {id: 1, signature: "Здесь будет какой-то текст"},
        {id: 2, signature: "Здесь будет какой-то текст, не длиннее 300 символов"},
        {id: 3, signature: "Здесь будет какой-то текст"},
    ]

    let delivery = [
        {id: 1, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block1"},
        {id: 2, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block2"},
        {id: 3, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block3"},
    ]

    let pictures = [
        {id: 1, img: img_two_slider, img_png: img_two_slider_png},
        {id: 2, img: img_three_slider, img_png: img_three_slider_png},
        {id: 3, img: img_four_slider, img_png: img_four_slider_png},
        {id: 4, img: img_one, img_png: img_one_png},
        {id: 5, img: img_two_slider, img_png: img_two_slider_png},
        {id: 6, img: img_three_slider, img_png: img_three_slider_png},
        {id: 7, img: img_four_slider, img_png: img_four_slider_png},
        {id: 8, img: img_one, img_png: img_one_png},
        {id: 9, img: img_two_slider, img_png: img_two_slider_png},
        {id: 10, img: img_three_slider, img_png: img_three_slider_png},
        {id: 11, img: img_four_slider, img_png: img_four_slider_png},
        {id: 12, img: img_one, img_png: img_one_png},
        {id: 13, img: img_two_slider, img_png: img_two_slider_png},
        {id: 14, img: img_three_slider, img_png: img_three_slider_png},
        {id: 15, img: img_four_slider, img_png: img_four_slider_png},
        {id: 16, img: img_two_slider, img_png: img_two_slider_png},
        {id: 17, img: img_three_slider, img_png: img_three_slider_png},
        {id: 18, img: img_four_slider, img_png: img_four_slider_png},
        {id: 19, img: img_one, img_png: img_one_png},
        {id: 20, img: img_two_slider, img_png: img_two_slider_png},
        {id: 21, img: img_three_slider, img_png: img_three_slider_png},
        {id: 22, img: img_four_slider, img_png: img_four_slider_png},
        {id: 23, img: img_one, img_png: img_one_png},
        {id: 24, img: img_two_slider, img_png: img_two_slider_png},
        {id: 25, img: img_three_slider, img_png: img_three_slider_png},
        {id: 26, img: img_four_slider, img_png: img_four_slider_png},
        {id: 27, img: img_one, img_png: img_one_png},
        {id: 28, img: img_two_slider, img_png: img_two_slider_png},
        {id: 29, img: img_three_slider, img_png: img_three_slider_png},
        {id: 30, img: img_four_slider, img_png: img_four_slider_png},
    ]

    return (
        <div className="App">

            <link rel="preload" as="image" href={img_one}/>

            <Header bold_block={2} style_element="main_style"/>

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


                {/*<div className="personal">*/}
                {/*    <Slider width_window={state}/>*/}
                {/*</div>*/}

                <div className="footer">
                    <Footer/>
                </div>

            </div>
        </div>
    );
};

export default IzBrasserie;