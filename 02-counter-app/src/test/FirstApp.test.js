import React from 'react';
// import { render } from "@testing-library/react";
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import FirstApp from '../FirstApp';

describe('<FisrtApp /> Test', () => {
    // test('Message "Hi, Im Angello" should be displayed', () => {
    //     const greeting = 'Hi, Im Angello';
    //     const {getByText} = render(<FirstApp saludo={greeting} />);
    //     expect(getByText(greeting)).toBeInTheDocument();
    // });

    test('<Must be displayed correctly', () => {
        const greeting = 'Hi, Im Angello';
        const wrapper = shallow(<FirstApp saludo={greeting} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Must show the subtitle sent by props', () => {
        const greeting = 'Hi, Im Angello';
        const subtitle = 'This is another subtitle';
        const wrapper = shallow(
            <FirstApp
                saludo={greeting}
                subtitle={subtitle}
            />
        );
        const textFromParagraph = wrapper.find('p').text();
        expect(textFromParagraph).toBe(subtitle);
    });

})