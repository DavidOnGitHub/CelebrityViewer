import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Filter from '../Filter';

describe('Filter', () => {
    const onTextChange = jest.fn();
    const onSelect = jest.fn();
    const label = 'filter label';
    const value = 'option1';
    const placeholder = 'place holder';
    const options = [
        {
            name: 'Option 1',
            value: 'option1'
        },
        {
            name: 'Option 2',
            value: 'option2'
        }
    ];

    const defaultProps = {
        label,
        options,
        onSelect,
        onTextChange,
        value,
        placeholder
    };

    it('should show a dropdown when only onSelect is passed as property', () => {
        const props = Object.assign({}, defaultProps);
        delete props.onTextChange;
        delete props.placeholder;

        const wrapper = shallow(<Filter {...props}/>);
        expect(wrapper.find('select')).to.have.length(1);
        expect(wrapper.find('input')).to.have.length(0);
    });
    it('should show an input box when only onTextChange is passed as property', () => {
        const props = Object.assign({}, defaultProps);
        delete props.onSelect;
        delete props.options;

        const wrapper = shallow(<Filter {...props}/>);
        expect(wrapper.find('select')).to.have.length(0);
        expect(wrapper.find('input')).to.have.length(1);
    });
    it('should display option names', () => {
        const wrapper = shallow(<Filter {...defaultProps}/>);
        expect(wrapper.find('option').at(0).text()).to.equal('Option 1');
        expect(wrapper.find('option').at(1).text()).to.equal('Option 2');
    });
    it('should be able to select an option', () => {
        const wrapper = shallow(<Filter {...defaultProps}/>);
        wrapper.find('select').simulate('change', 'option2');

        expect(onSelect.mock.calls.length).to.equal(1);
        expect(onSelect.mock.calls[0][0]).to.equal('option2');
    });
    it('should be able to call onTextChange when typing in text box', () => {
        const wrapper = shallow(<Filter {...defaultProps}/>);
        wrapper.find('input').simulate('change', 'a');

        expect(onTextChange.mock.calls.length).to.equal(1);
        expect(onTextChange.mock.calls[0][0]).to.equal('a');
    });
});