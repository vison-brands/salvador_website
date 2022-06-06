
import React, {Component} from "react";
import './Header.css';
import companyLogo from '../assets/SALVADOR.svg';

class Header extends Component{
    render(){
        return <header class="flex content-center">
            <img src={companyLogo} alt="SALVADOR ASYNC. logo" class="col-span-2" width="120px"/>
        </header>
    }
}

export default Header;