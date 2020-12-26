import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('<AddCategory /> Test', () => {

    const setCagegories = jest.fn(); 
    let wrapper = shallow(<AddCategory setCategories={setCagegories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCagegories} />);
    });

    test('Must be showed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Must change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', {
            target: {value}
        });
    });

    test('Must not post the information onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCagegories).not.toHaveBeenCalled();
    });

    test('Must call the setCategories and clean textbox', () => {
        const value = 'Hello World';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCagegories).toHaveBeenCalled();
        /* toHaveBeenCalled with is tu specify the parameters expected to be
        passed through the function once it have been executed */
        expect(setCagegories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});