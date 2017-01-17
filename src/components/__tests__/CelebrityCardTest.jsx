import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import CelebrityCard from '../CelebrityCard';

describe('CelebrityCard', () => {
    const rank = 2;
    const name = 'Test Person';
    const netWorth = 2000000;
    const age = '55';
    const country = 'Australia';
    const currency = {
        code: 'aud',
        display: '$AUD',
        value: 0.8
    };
    const noResult = false;
    const defaultProps = {
        rank,
        name,
        netWorth,
        age,
        country,
        currency,
        noResult
    };

    it('should display correct currency format and value', () => {
        const wrapper = shallow(<CelebrityCard {...defaultProps}/>);
        expect(wrapper.find('.celebrity-card-item').at(1).text()).to.have.string('$AUD 2,500,000');
    });
    it('should display no results if there are no results', () => {
        const props = Object.assign({}, defaultProps, {
            noResult: true
        });
        const wrapper = shallow(<CelebrityCard {...props}/>);
        expect(wrapper.find('.celebrity-card-item')).to.have.length(0);
        expect(wrapper.find('.celebrity-card-header').text()).to.equal('No Results Found');
    });
});