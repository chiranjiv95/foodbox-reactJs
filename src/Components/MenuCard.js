import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

export const MenuCard = ({ name, imgSrc, isActive }) => {
        return (
                <div className={`row-menu-card ${isActive ? `active` : ``}`}>
                        <div className="img-box">
                                <img src={imgSrc} />
                        </div>
                        <h3>{name}</h3>
                        <i className="load-menu"><ChevronRightRounded /></i>
                </div>
        )
}