import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
    it('renders without crashing', () => {
        shallow(<BodySection />);
    });
});