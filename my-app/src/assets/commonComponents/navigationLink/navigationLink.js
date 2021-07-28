import './navigationLink.css';

export const NavigationLink = (props) => {
    const { linkClass, link, title } = props;
    return (
        <div className='login__header-button-container'>
            <a className={linkClass} href={link}>{title}</a>
        </div>
    );
}