import React from 'react'
import { AddRounded, RemoveRounded } from "@mui/icons-material";

const CartItem = ({ itemId, name, imgSrc, price, qty }) => {
        return (
                <div className="cart-item" id={itemId}>
                        <div className="img-box">
                                <img src={imgSrc} alt="" />
                        </div>
                        <div className="item-section">
                                <h2 className="item-name">{name}</h2>
                                <div className="item-quantity">
                                        <span>x {qty}</span>
                                        <div className="quantity">
                                                <RemoveRounded
                                                        className="item-remove"

                                                />
                                                <AddRounded
                                                        className="item-add"

                                                />
                                        </div>
                                </div>
                        </div>
                        <p className="item-price">
                                <span className="dollar-sign">$</span>{" "}
                                <span className="item-price-value">{price}</span>
                        </p>
                </div>
        )
}

export default CartItem