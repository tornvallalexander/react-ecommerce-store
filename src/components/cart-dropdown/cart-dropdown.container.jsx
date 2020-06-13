import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "./../../redux/cart/cart.selectors";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropdownContainer = compose(connect(mapStateToProps))(CartDropdown);

export default CartDropdownContainer;
