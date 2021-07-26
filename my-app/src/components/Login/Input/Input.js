import './Input.css';

export default function Input(props) {
    return (
            <div class="login__input-container">
                <input type={props.type} placeholder={props.placeholder} className='login__input-field'>
                </input>
            </div>
    );
}