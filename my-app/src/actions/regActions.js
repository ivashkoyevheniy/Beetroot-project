

export const registration = (data) => {
    const savedData = localStorage.getItem('registration');
    savedData ? alert('You already have an account! Please login!') :
    localStorage.setItem('registration', JSON.stringify(data));
}

export const login = (data) => {
    const { username, password } = JSON.parse(localStorage.getItem('registration'));
    if (data.username === username && data.password === password){
        localStorage.setItem('token', JSON.stringify('you received token'));
        window.location.reload();
    }
    else alert('Enter correct username and password!')
}