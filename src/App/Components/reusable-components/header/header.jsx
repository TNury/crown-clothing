// REACT-ROUTER
import { Link } from 'react-router-dom';
// REDUX
import { connect } from 'react-redux';
import { currentUserSelector } from '../../../Redux/reducers/user/selectors/userSelectors.js'; 
import { displayDropdownSelector } from '../../../Redux/reducers/cart/selectors/cartSelectors';

// FIREBASE 
import { auth } from '../../../Firebase/firebase.js';
// ICON
import { ReactComponent as Logo } from '../../../Assets/icons/crown.svg';
// COMPONENTS
import CartIcon from './cart-icon/cart-icon.jsx';
import CartDropdown from './cart-dropdown/cart-dropdown.jsx';
// STYLES
import { headerStyles } from './header.styles.js';

const Header = ({ reduxProps: { userProps, displayDropdownProp } }) => {

  const { header, logoContainer, options, option } = headerStyles();

  return (
    <header className={header}>
      <Link className={logoContainer} to="/">
        <Logo />
      </Link>
      <div className={options}>
        <Link className={option} to="/shop">SHOP</Link>
        <Link className={option} to="/contact">CONTACT</Link>
        {
          userProps
          ?
          <div onClick={() => auth.signOut()} className={option}>SIGN OUT</div>
          :
          <Link className={option} to="/auth">SIGN IN</Link>
        } 
        <CartIcon />
      </div>
      {displayDropdownProp ? <CartDropdown /> : null}
    </header>
  );
};

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    userProps: currentUserSelector(currentStore),
    displayDropdownProp: displayDropdownSelector(currentStore)
  }
});

export default connect(mapStoreToProps)(Header);