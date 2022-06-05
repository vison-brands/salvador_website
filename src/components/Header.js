
import React, {Component} from "react";
import './Header.css';
import companyLogo from '../assets/SALVADOR.svg';

class Header extends Component{
    render(){
        return <header class="grid items-center">
            <img src={companyLogo} alt="SALVADOR ASYNC. logo" class="col-span-2" width="160px"/>
        </header>
    }
}

export default Header;