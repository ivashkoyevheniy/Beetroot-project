import "./navigationLink.css";
import { iconCreator } from "../../../utils";
import { NavLink } from "react-router-dom";
import React from "react";

export const NavigationLink = ({ isRegPage, link, title, icon, toggler }) => {
  return (
    <div className="nav-link-container">
      {toggler && (
        <div className="icon-container icon-container--nav">
          {iconCreator(icon)}
        </div>
      )}
      <NavLink
        to={link}
        activeClassName={
          isRegPage ? "login-nav-link--active" : "sidebar-nav-link--active"
        }
        className={
          isRegPage ? "nav-link login-nav-link" : "nav-link sidebar-nav-link"
        }
      >
        {title}
      </NavLink>
    </div>
  );
};
