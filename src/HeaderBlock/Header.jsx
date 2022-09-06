import React from 'react';
import Logo from "./Logo";
import MenuElements from "./MenuElements";
import './css/Header.css';
import '../HeaderBlock/css/ElementsMenu.css'
import BasketAndBurger from "./BasketAndBurger";

const Header = ({bold_block, style_element}) => {
    let elements = [
        {id: 1, signature: "О ПРОЕКТЕ", link: "?"},
        {id: 2, signature: "ЗАКАЗАТЬ ДОСТАВКУ", link: "?"},
        {id: 3, signature: "SIBUMI", link: "?"},
        {id: 4, signature: "IZ BRAZERIE", link: "?"},
        {id: 5, signature: "КОНДИТОРИЯ", link: "?"},
    ]

    return (
        <div className="headerMenu">
                <Logo/>
                <MenuElements bolder_check = {bold_block} outer_class="menu" style_elements={style_element} inner_class="lineOne" massiv={elements}/>
                <BasketAndBurger/>
        </div>
    );
};

export default Header;