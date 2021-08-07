import React from "react";
import { NavigationLink } from "../../assets/commonComponents";
import "./Navigation.css";
import homeIcon from "../../assets/img/home-icon.svg";
import statisticsIcon from "../../assets/img/statistics-icon.svg";
import workflowIcon from "../../assets/img/workflow-icon.svg";
import calendarIcon from "../../assets/img/calendar-icon.svg";
import userIcon from "../../assets/img/user-icon.svg";
import settingsIcon from "../../assets/img/settings-icon.svg";
import { routes } from "../../utils/routes";

export const Navigation = (props) => {
    const { toggler, naviClass } = props;
    return (
        <nav className={naviClass}>
            {toggler && <NavigationLink title="Register" isRegPage={toggler} link={routes.registration} />}
            {toggler && <NavigationLink title="Login" isRegPage={toggler}  link={routes.login} />}
            {!toggler && <NavigationLink toggler="true" icon={homeIcon} title="Home"  link={routes.home} />}
            {!toggler && <NavigationLink toggler="true" icon={statisticsIcon} title="Workflow"  link={routes.workflow} />}
            {!toggler && <NavigationLink toggler="true" icon={workflowIcon} title="Statistics"  link={routes.statistics} />}
            {!toggler && <NavigationLink toggler="true" icon={calendarIcon} title="Calendar"  link={routes.calendar} />}
            {!toggler && <NavigationLink toggler="true" icon={userIcon} title="Users"  link={routes.users} />}
            {!toggler && <NavigationLink toggler="true" icon={settingsIcon} title="Settings"  link={routes.settings} />}
        </nav>
    );
}
