import lefttimeIcon from "../../img/left-time-icon.svg";
import timedelayIcon from "../../img/time-delay-icon.svg";
import completeIcon from "../../img/complete-icon.svg";
import { iconCreator } from "../../../utils";


export const TableItemDescription = ({ description, isCompleted, inTime }) => {

    if (!isCompleted && inTime) {
        return (
            <div className="item-description">
                <div className='item-time-icon'>{iconCreator(lefttimeIcon)}</div>
                {description}
            </div>
        );
    }
    else if (!isCompleted && !inTime) {
        return (
            <div className="item-description item-description--delay">
                <div className='item-time-icon'>{iconCreator(timedelayIcon)}</div>
                {description}
            </div>
        );
    }
else return (
        <div className="item-description item-description--complete">
           <div className='item-time-icon'>{iconCreator(completeIcon)}</div>
            {description}
        </div>
    );
};
