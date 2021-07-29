export const getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export const iconCreator = (icon) => <img className="icon" src={icon} alt="icon" />;
