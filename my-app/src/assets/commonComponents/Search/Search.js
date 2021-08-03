import './Search.css';
import { iconCreator } from '../../../utils';
import searchIcon from "../../img/search-icon.svg";

export const Search = () => {
    return (
        <div className='search'>
            <input className='search-field' type='search' name='search' />
            <button href='#' className='search-link'>
                {iconCreator(searchIcon)}
            </button>
        </div>

    );
}