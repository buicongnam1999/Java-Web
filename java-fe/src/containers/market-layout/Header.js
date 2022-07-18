import "./Header.scss"
import { BrowserRouter as Link } from "react-router-dom";
import { checkUser } from "../../ulities/helper"

const Header = (props) => {
    return (
        <div className="header">
            <div className="global-header">
                <ul className="navbar color-navbar">
                    <li>
                        <a href="javascript:void(0)">
                            <i className="icon20 home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                        <i className="icon20 download"></i>
                            <span>Tải lancher</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="icon20 login"></i>
                            <span>{props.username}ac</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span className="right">Coin: {props.coins}</span>
                            <i className="icon25 maincoin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span className="right">CoinFree: {props.coinfree}</span>
                            <i className="icon25 maincoinfree"></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <span className="right">GNB: {props.gold}</span>
                            <i className="icon25 maingnb"></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            <i className="icon20 fa-sign-out"></i>
                            <span>{checkUser(props.username)}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;