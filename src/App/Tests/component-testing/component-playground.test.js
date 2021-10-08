// ENZYME
import '../setupTests.js';
import { shallow } from 'enzyme';
// COMPONENTS
import CartItem from '../../Components/reusable-components/cart-item/cart-item.jsx';

describe('<CartItem />', () => {

  let wrapper;

  beforeEach(() => {
    
    const mockProps = {
      name: 'Green Beenie',
      imageUrl: 'https://something.com',
      price: '95',
      quantity: '1'
    };
  
    wrapper = shallow(<CartItem drilledProps={{ ...mockProps }} />);

  })


  it('is a reusable component that renders cart items', () => {

    expect(wrapper).toMatchSnapshot();

  });

  it('has a name prop', () => {

    expect(wrapper.find('[id="nameProp"]').props().children).toBe('Green Beenie');

  });

});
