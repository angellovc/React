import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('<GifGrid /> Tests', () => {
    const category = 'Hello';

    test('Snapshot sould match', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Must display intems once images have been loaded', () => {
        useFetchGifs.mockReturnValue({
            data: [{
                id: '123',
                title: 'abc',
                url: 'http://localhost'
            }],
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(1);
    });

});