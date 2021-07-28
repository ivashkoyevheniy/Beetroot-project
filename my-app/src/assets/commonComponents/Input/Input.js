import './Input.css';

export default function Input({placeholder, type}) {
    return (
            <div className="login__input-container">
                <input type={type} placeholder={placeholder} className='login__input-field'>
                </input>
            </div>
    );
}