import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('<CounterApp /> Tests', () => {

    let wrapper = shallow(<CounterApp value={100} />);
    let value;
    beforeEach(() => {
        value = 100;
        wrapper = shallow(<CounterApp value={value} />);
    });

    test('Must be displayed correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Default value must be equal to 100', () => {
        const textFromH2 = wrapper.find('h2').text();
        expect(textFromH2.split(' ')[1]).toBe(value.toString());
    });

    test('+1 button Must increase the counter', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('Number: 101');
    });

    test('-1 button must decrease the couter', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('Number: 99');
    });

    test('reset button must restore default value which comes from props', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        // add button
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        // reset button
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('Number: 105');
    });

});