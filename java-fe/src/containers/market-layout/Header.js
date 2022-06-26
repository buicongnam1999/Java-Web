import "./Header.scss"
import { BrowserRouter as Link } from "react-router-dom";
import { checkUser } from "../../ulities/helper"

const Header = (props) => {

    return (
        <div className="header">
            <div className="global-header">
                <ul className="navbar color-navbar">
                    <li>
                        <a href="javascript:void(0)"><span>Home</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><span>Tải lancher</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><span>{props.username}</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><span>Coin: {props.coins}</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><span>CoinFree: {props.coinfree}</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><span>GNB: {props.gold}</span></a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"><span>{checkUser(props.username)}</span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;