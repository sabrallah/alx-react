import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('checks that handleDisplayDrawer is called when menu item is clicked', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={mockHandleDisplayDrawer} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
  });

  it('checks that handleHideDrawer is called when close button is clicked', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleHideDrawer={mockHandleHideDrawer} displayDrawer />);
    wrapper.find('button').at(1).simulate('click');
    expect(mockHandleHideDrawer).toHaveBeenCalled();
  });
});