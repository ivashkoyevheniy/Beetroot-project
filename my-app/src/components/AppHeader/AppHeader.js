import "./AppHeader.css";
import { iconCreator } from "../../utils";
import caretleftIcon from "../../assets/img/caretleft-icon.svg";
import caretdownIcon from "../../assets/img/caretdown-icon.svg";
import hamburgerIcon from "../../assets/img/hamburger-icon.svg";
import darkMailIcon from "../../assets/img/dark-mail-icon.svg";
import notificationIcon from "../../assets/img/notification-icon.svg";
import { Search } from "../../assets/commonComponents";
import { Button } from "../../assets/commonComponents";
import { Avatar } from "../../assets/commonComponents";
import avatarImage from "./../../assets/img/user-avatar.jpg";
import logoutIcon from "./../../assets/img/logout-icon.svg";

export const AppHeader = () => {
    const onHandleClick = () => {
        localStorage.remove('token');
        window.location.reload();
    }
    return (
        <header className="app-header">
            <div className="left-header-container">
                <button className="hamburger-link">
                    <div className="icon-container icon-container--header icon-container--small">
                        {iconCreator(caretleftIcon)}
                    </div>
                    <div className="icon-container icon-container--header">
                        {iconCreator(hamburgerIcon)}
                    </div>
                </button>
                <Search />
            </div>
            <div className="right-header-container">
                <div className="header-btn-container">
                    <Button btnClass="btn btn-primary btn--small" title="+ Add project" toggler={false}></Button>
                </div>
                <div className="icon-container icon-container--header">
                    {iconCreator(darkMailIcon)}
                </div>
                <div className="icon-container icon-container--header">
                    {iconCreator(notificationIcon)}
                </div>
                <Avatar avatarSrc={avatarImage} avatarClass="avatar-image"></Avatar>
                <button className="icon-container icon-container--header">
                    {iconCreator(caretdownIcon)}
                </button>
                <button className="icon-container icon-container--header" onClick={onHandleClick}>
                    {iconCreator(logoutIcon)}
                    </button>
            </div>
        </header>
    );
}