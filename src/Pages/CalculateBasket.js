import React from 'react';
import {createStore} from "redux";

// import {createStore} from "redux"
// import {Provider} from "react-redux";
// import CardElement from "../MenuPage/CardMenu"
const defaultState = {
    items: [],
};

let arrayWithElements = [];
localStorage.setItem("arrayWithElements", JSON.stringify(arrayWithElements));
// const CalculateBasket = () => {
//
//     const defaultState = [];
//
//     const reducer = (state = defaultState, action) => {
//         switch (action.type) {
//
//             case "ADD_ELEM":
//                 return {...state.push(action)}
//             case "DELETE_ELEM":
//                 return {...state.delete(action)}
//             default: return state
//         }
//     }
//
//     console.log(defaultState);
//
//     const store = createStore(reducer)
//
//     return (
//         <Provider store = {store}>
//             <CardElement/>
//         </Provider>
//
//     );
// };
// function checkElementInState(action){
//     defaultState.forEach(elem => {
//             if(elem.id === action){
//                 elem.count++;
//                 console.log(elem + " action2")
//                 return true;
//             }
//         }
//     )
//     return false;
// }

function reducer (state = defaultState, action){
    switch (action.type) {

        case "ADD_ELEM":
            console.log(action.count + " count")
            arrayWithElements = JSON.parse(localStorage.getItem("arrayWithElements"))
            // if(arrayWithElements.length === 0) {
                arrayWithElements.push(action);
                localStorage.setItem("arrayWithElements", JSON.stringify(arrayWithElements));
            return {...state}


        case "UPDATE_ELEM":
            arrayWithElements = JSON.parse(localStorage.getItem("arrayWithElements"))
            arrayWithElements.forEach(elem => {
                if(elem.id === action.id){
                    elem.count++;
                }
            });
            localStorage.setItem("arrayWithElements", JSON.stringify(arrayWithElements));
            return {...state}

        case "DELETE_ELEM":
            arrayWithElements = JSON.parse(localStorage.getItem("arrayWithElements"))
            arrayWithElements.forEach(elem => {
                if(elem.id === action.id){
                    elem.count=elem.count-1;
                }
            });
            localStorage.setItem("arrayWithElements", JSON.stringify(arrayWithElements));
            return {...state}
        default: return state
    }
}

console.log(defaultState)

export const store = createStore(reducer);