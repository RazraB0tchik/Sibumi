import React, {useEffect} from 'react';
import {useState} from "react";
import InputMask from "react-input-mask";

const ButtonsOrder = ({type}) => {
    const[state, setState] = useState();

    function setRadio(event){
        return setState(event.target.value)
    }

    const[stateTime, setStateTime] = useState();

    function setRadioTime(event){
        return setStateTime(event.target.value)
    }

    const[statePay, setStatePay] = useState();

    function setRadioPay(event){
        return setStatePay(event.target.value)
    }



    // function setRadioPolicy(event){
    //     if(statePolicy===false){
    //         setStatePolicy(true);
    //     }
    //     else {
    //         setStatePolicy(false);
    //     }
    // }

    // function setRadioSpam(event){
    //     if(stateSpam===false){
    //         setStateSpam(true);
    //     }
    //     else {
    //         setStateSpam(false);
    //     }
    // }

    const[stateBox, setStateBox] = useState(false);
    function setBoxCall(event){
        if(stateBox===false){
            setStateBox(true);
        }
        else {
            setStateBox(false);
        }
    }

    const[statePolicy, setStatePolicy] = useState(false);
    function setBoxPolice(event){
        if(statePolicy===false){
            setStatePolicy(true);
        }
        else {
            setStatePolicy(false);
        }
    }

    const[stateSpam, setStateSpam] = useState(false);
    function setBoxSpam(event){
        if(stateSpam===false){
            setStateSpam(true);
        }
        else {
            setStateSpam(false);
        }
    }

    const blurChecked = (e) => {
        switch (e.target.name) {
            case "phone":
                setPhoneDirty(true);
                break;

            case "email":
                setEmailDirty(true);
                break;
        }

    }


    const handlerEmail = (e) =>{
        setEmail(e.target.value)

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Некорректная почта!");
        }
        else {
            setEmailError('');
        }

    }

    const handlerPhone = (e) =>{
        setPhone(e.target.value)

        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!re.test(String(e.target.value).toLowerCase())){
            setPhoneError("Некорректный номер телефона!");
        }
        else {
            setPhoneError('');
        }

    }


    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailError, setEmailError] = useState('Вы не указали почту!');
    const [phoneError, setPhoneError] = useState('Вы не указали номер телефона!');
    const [formValid, setFormValid] = useState(false);

    let styles = {backgroundColor: "white",
        fontFamily: "Conv_SFUIText-Medium",
        color: "rgb(206, 189, 160)",
        marginTop: "5px",
    }

    switch (type){
        case "takeOrder":
            return (
                <div className="first_question_pool">
                    <div className="question_one"> Как вы хотите забрать заказ?</div>
                    <div className="answers_question_one">
                    <div className="answers_one">
                        <label className="elem_form" >
                        <input type="radio" value="export1" checked={state == "export1" ? true : false} onChange={setRadio} className="radio"/>
                        <span className="fake"/>
                        САМОВЫВОЗ
                        </label>
                    </div>
                    <div className="answer_two">
                        <label className="elem_form" >
                        <input className="radio" type="radio" value={"export2"} checked={state == "export2" ? true : false} onChange={setRadio}/>
                        <span className="fake"/>
                        ДОСТАВКА
                        </label>
                    </div>
                    </div>
                </div>
            );

        case "timeOrder":
            return (
                <div className="second_question_pool">
                    <div className="question_two"> К какому времени вы хотите получить заказ?</div>
                    <div className="answersTwo">
                     <div className="radio_one">
                         <div className="elem1">
                    <label className="elem_form" >
                        <input type="radio" value="time1" className="radio" checked={stateTime == "time1" ? true : false} onChange={setRadioTime}/>
                        <span className="fake"/>
                        БЛИЖАЙШЕЕ
                    </label>
                         </div>

                         <div className="elem2">

                    <label className="elem_form" >
                        <input className="radio" type="radio" value={"time2"} checked={stateTime == "time2" ? true : false} onChange={setRadioTime}/>
                        <span className="fake"/>
                        К ОПРЕДЕЛЕННОМУ
                    </label>
                         </div>
                     </div>
                     <div className="input_one">
                        <input className="text_input_one" type="text" placeholder="ХОЧУ ПОЛУЧИТЬ К 17:00"/>
                     </div>
                    </div>
                </div>
            );

        case "payOrder":
            return (
                <div className="third_question_pool">
                    <div className="question_three">Выберите способ оплаты:</div>
                    <div className="radio_two">
                        <div className="radio_two_element">
                    <label className="elem_form" >
                        <input type="radio" value="pay1" className="radio" checked={statePay == "pay1" ? true : false} onChange={setRadioPay}/>
                        <span className="fake"/>
                        ОПЛАТА НА САЙТЕ
                    </label>
                        </div>

                        <div className="radio_two_element">
                    <label className="elem_form" >
                        <input type="radio" className="radio" value={"pay2"} checked={statePay == "pay2" ? true : false} onChange={setRadioPay}/>
                        <span className="fake"/>
                        НАЛИЧНЫМИ КУРЬЕРУ
                    </label>
                        </div>

                        <div className="radio_two_element">
                    <label className="elem_form" >
                        <input type="radio" value={"pay3"} className="radio" checked={statePay == "pay3" ? true : false} onChange={setRadioPay}/>
                        <span className="fake"/>
                        БЕЗНАЛИЧНЫЙ РАСЧЕТ КУРЬЕРУ
                    </label>
                        </div>
                    </div>
                </div>
            );

        case "otherQuestions":
            return (
                <div className="fours_question_pool">
                    <div className="checkBox_last_question">
                        <label className="label_form_order">
                        <input type="checkbox" className="checkbox" value="privacyPolicy" checked={statePolicy} onChange={setBoxPolice}/>
                        <span className="checkbox_new"/>
                        Я согласен с политикой конфиденциальности
                    </label>
                    </div>

                    <div className="checkBox_last_question">
                    <label className="label_form_order">
                        <input type="checkbox" className="checkbox" value="privacySpam" checked={stateSpam} onChange={setBoxSpam}/>
                        <span className="checkbox_new"/>
                        Хочу получать рассылку на вкусном
                    </label>
                    </div>

                    <div className="checkBox_last_question">
                    <label className="label_form_order">
                        <input type="checkbox" value="privacyCall" className="checkbox" checked={stateBox} onChange={setBoxCall}/>
                        <span className="checkbox_new"/>
                        Оформить без звонка оператора
                    </label>
                    </div>
                </div>
            );

        case "contactForm":
            return (
                <div className="formsForOrder">
                        <div className="input_for_contact">
                            <label className="label_contact">
                                Ваше имя
                            </label>
                            <div className="input_two">
                                <input className="text_input_one"  type="text" placeholder="ВВЕСТИ СЮДА"/>
                            </div>
                        </div>

                        <div className="input_for_contact">
                            <label className="label_contact">
                                Ваша фамилия
                            </label>
                            <div className="input_two">
                                <input className="text_input_one"  type="text" placeholder="ВВЕСТИ СЮДА"/>
                            </div>
                        </div>

                        <div className="input_for_contact">
                            <label className="label_contact">
                                Номер телефона
                            </label>
                            <div className="input_two">
                                <InputMask className="text_input_one" placeholder={"+7 (999) 99 99 999"}
                                           name="phone" mask = "+7(999) 99 99 999"
                                />
                            </div>
                            {(phoneDirty && phoneError) && <div style={styles}> {phoneError}</div>}
                        </div>

                        <div className="input_for_contact">
                            <label className="label_contact">
                                Ваша почта
                            </label>
                            <div className="input_two">
                                <input onChange={e => handlerEmail(e)} value={email} onBlur={e => blurChecked(e)} name="email" className="text_input_one"  type="text" placeholder="MAIL@MAIL.COM"/>
                            </div>
                            {(emailDirty && emailError) && <div style={styles}> {emailError}</div>}
                        </div>

                    </div>
            );
    }
};

export default ButtonsOrder;