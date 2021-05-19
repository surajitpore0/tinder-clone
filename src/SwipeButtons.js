import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon className="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon className="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon className="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavoriteIcon className="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon className="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
