
import React, {Component} from "react";
import './MainMenu.css';

class MainMenu extends Component{
    render(){
        return <div class='main_menu'>
                <aside class="grid">            
                    <a class="py-0.5" href="https://www.instagram.com/">HOME</a>
                    <a class="py-0.5" href="https://www.instagram.com/">BIO</a>
                    <a class="py-0.5" href="https://www.instagram.com/">MUSIC</a>
                    <a class="py-0.5" href="https://www.instagram.com/">DATES</a>
                    <a class="py-0.5" href="https://www.instagram.com/">SHOP</a>
                    <a class="py-0.5" href="https://www.instagram.com/">NEWSLATER</a>
                </aside>
        </div>
    }
}

export default MainMenu;