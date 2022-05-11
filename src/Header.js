import React from "react";


const Header = () => {
    return (<nav>
        <div class="nav-wrapper  blue lighten-1">
            <a href="/" class="brand-logo">Family Finance</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Expenses</a></li>
                <li><a href="/">Components</a></li>
                <li><a href="/">JavaScript</a></li>
            </ul>
        </div>
    </nav>);
}
export default Header;