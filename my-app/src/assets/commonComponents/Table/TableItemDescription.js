import lefttimeIcon from "../../img/left-time-icon.svg";
import timedelayIcon from "../../img/time-delay-icon.svg";
import completeIcon from "../../img/complete-icon.svg";
import settingsIcon from "../../img/settings-small-icon.svg";
import replyIcon from "../../img/reply-icon.svg";
import { iconCreator } from "../../../utils";


export const TableItemDescription = ({ description, isCompleted, inTime, isReaded, time }) => {

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
                <div className='item-icon'>{iconCreator(timedelayIcon)}</div>
                {description}
            </div>
        );
    }
    else if (isCompleted) {
        return (
            <div className="item-description item-description--complete">
                <div className='item-icon'>{iconCreator(completeIcon)}</div>
                {description}
            </div>
        );
    }
    else if (isReaded) {
        return (
            <div className="item-description item-description--messages">
                <div className='item-icon'>{iconCreator(replyIcon)}</div>
                <div className='item-icon'>{iconCreator(settingsIcon)}</div>
            </div>
        );
    }
    else return (
        <div className="item-description item-description--activity">
            <div className='item-icon'>{iconCreator(lefttimeIcon)}</div>
            {time}
        </div>
    );
};
