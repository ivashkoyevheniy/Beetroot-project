import './Button.css';

export default function Button(props) {
    return (
        <div className='login__header-button-container'>
            <a class={props.class} href={props.link}>{props.title}</a>
        </div>
    );
}