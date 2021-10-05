// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { currentUserSelector } from '../../../Redux/reducers/user/selectors/userSelectors.js'; 
import { displayDropdownSelector } from '../../../Redux/reducers/cart/selectors/cartSelectors';
import { signOutStart } from '../../../Redux/reducers/user/actions/userActions.js';
// REACT-ROUTER
import { Link } from 'react-router-dom';
// ICON
import { ReactComponent as Logo } from '../../../Assets/icons/crown.svg';
// COMPONENTS
import { CartIcon } from './cart-icon/cart-icon.jsx';
import { CartDropdown } from './cart-dropdown/cart-dropdown.jsx';
// STYLES
import { headerStyles } from './header.styles.js';

export const Header = () => {

  // HOOKS
  const userProps = useSelector(currentUserSelector);

  const displayDropdownProp = useSelector(displayDropdownSelector);

  const dispatch = useDispatch();

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
          <div onClick={() => dispatch(signOutStart())} className={option}>SIGN OUT</div>
          :
          <Link className={option} to="/auth">SIGN IN</Link>
        } 
        <CartIcon />
      </div>
      {displayDropdownProp ? <CartDropdown /> : null}
    </header>
  );
};