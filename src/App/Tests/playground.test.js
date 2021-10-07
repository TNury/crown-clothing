// ENZYME
import './setupTests.js';
import { shallow } from 'enzyme';
// COMPONENTS
import CartItem from '../Components/reusable-components/cart-item/cart-item.jsx';

const mockProps = {
  name: '',
  imageUrl: '',
  price: '',
  quantity: ''
};

shallow(<CartItem drilledProps={{...mockProps}}/>);