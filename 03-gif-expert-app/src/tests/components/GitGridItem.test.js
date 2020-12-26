import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('<GitGridItem /> Tests', () => {

    const title = 'This is a Title';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);


    test('Snapshot must match', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Paragraph must be created using the title', () => {
        const paragraph = wrapper.find('p').text().trim();
        expect(paragraph).toBe(title);
    });

    test('img src and alt must be equal url and title', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Div must contain animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.props().className;
        expect(className?.includes('animate__fadeIn')).toBe(true);
    });

})
