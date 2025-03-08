import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../context/ItemContext";

const Header = () => {
	const { itemsInCart, totalPrice } = useContext(itemContext);

	return (
		<div className="header">
			<h1 className="bookstore">Book Store</h1>

			<div className="right-section">
				<h3 className="total-price">Total Price: {totalPrice}</h3>

				<div className="cart">
					<FontAwesomeIcon icon={faCartShopping} size="2x" />
					<span className="cart-items">{itemsInCart}</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
