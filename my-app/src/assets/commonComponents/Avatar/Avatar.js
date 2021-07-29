import './Avatar.css';

export const Avatar = (props) => {
    const {avatarClass, avatarSrc} = props;
    return (
        <div className='user-avatar-container'>
                    <img src={avatarSrc} className={avatarClass}></img>
                </div>
    );
}