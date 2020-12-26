import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';


describe('<GifExpectApp /> Tests', () => {

    test('Snapshot should match', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
});
