import './Avatar.css';

export const Avatar = (props) => {
    const {avatarClass, avatarSrc} = props;
    return (
        <div className='avatar-container'>
                    <img alt='avatar' src={avatarSrc} className={avatarClass}></img>
                </div>
    );
}