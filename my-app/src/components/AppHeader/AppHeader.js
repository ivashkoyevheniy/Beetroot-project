import './AppHeader.css';
import { iconCreator } from '../../utils';
import caretleftIcon from "../../assets/img/caretleft-icon.svg";
import caretdownIcon from "../../assets/img/caretdown-icon.svg";
import hamburgerIcon from "../../assets/img/hamburger-icon.svg";
import darkMailIcon from "../../assets/img/dark-mail-icon.svg";
import notificationIcon from "../../assets/img/notification-icon.svg";
import { Search } from '../../assets/commonComponents';
import { Button } from '../../assets/commonComponents';
import { Avatar } from '../../assets/commonComponents';
import avatarImage from './../../assets/img/user-avatar.jpg';


export const AppHeader = () => {
    return (
        <header className='app-header'>
            <div className='left-header-container'>
                <a className='hamburger-link' href='#'>
                    <div className='icon-container icon-container--header icon-container--small'>
                        {iconCreator(caretleftIcon)}
                    </div>
                    <div className='icon-container icon-container--header'>
                        {iconCreator(hamburgerIcon)}
                    </div>
                </a>
                <Search />
            </div>
            <div className='right-header-container'>
                <div className='header-btn-container'>
                    <Button btnClass='btn btn-primary btn--small' title="+ Add project" toggler={false}></Button>
                </div>
                <div className='icon-container icon-container--header'>
                    {iconCreator(darkMailIcon)}
                </div>
                <div className='icon-container icon-container--header'>
                    {iconCreator(notificationIcon)}
                </div>
                <Avatar avatarSrc={avatarImage} avatarClass='avatar-image'></Avatar>
                <a href='#' className='icon-container icon-container--header'>
                    {iconCreator(caretdownIcon)}
                </a>
            </div>
        </header>
    );
}