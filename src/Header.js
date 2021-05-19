import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://banner2.cleanpng.com/20180529/aw/kisspng-tinder-logo-dating-computer-icons-premium-5b0dc478d163d2.4329997815276289208577.jpg"
                alt=""
            />
            <IconButton>
                <ForumIcon fontSize="large" claasName="header__icon" />
            </IconButton>
        </div>
    );
}

export default Header;
