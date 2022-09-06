import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ServicePage from './ServicePage'
import Iz_brasserie from "./Iz_brasserie";
import Main from "./MainPage"
import Contact from "./СontactsPage"
import Menu from "./MenuPage"
import Basket from "./BasketPage"
import Error from "./ErrorePage"
import Loading from "./Loading"
const RouterComponent = () => {
    return (
    <Router>
            <Routes>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Route path="/iz_brazeri" element={<Iz_brasserie/>} />,
                <Route path="/service" element={<ServicePage/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/load" element={<Loading/>}/>
            </Routes>
    </Router>
    );
};

export default RouterComponent;