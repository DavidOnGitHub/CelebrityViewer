import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import {CelebritiesView} from '../CelebritiesView';
import CelebrityCard from '../CelebrityCard';
import Filter from '../Filter';

describe('CelebritiesView', () => {
    const setBirthCountry = jest.fn();
    const setCurrency = jest.fn();
    const setName = jest.fn();
    const setSortBy = jest.fn();
    const birthCountry = 'Show All';
    const currency = 'usd';
    const nameFilter = null;
    const sortBy = 'rank';
    const birthCountryOptions = ['Show All'];
    const currencyOptions = [
        {
            code: 'usd',
            name: 'US Dollar',
            display: '$USD',
            value: 1
        },
        {
            code: 'aud',
            name: 'Australian Dollar',
            display: '$AUD',
            value: 0
        },
        {
            code: 'eur',
            name: 'Euro',
            display: '\u{20ac}',
            value: 0
        }
    ];
    const sortByOptions = [
        {
            code: 'rank',
            name: 'Rank'
        },
        {
            code: 'name',
            name: 'Name'
        },
        {
            code: 'age',
            name: 'Age'
        }
    ];
    const celebrities = [
        {
            rank: 1,
            name: 'John Walton',
            netWorth: 21000000000,
            age: '68',
            country: 'United States'
        },
        {
            rank: 2,
            name: 'Rupert Murdoch',
            netWorth: 14000000000,
            age: '84',
            country: 'Australia'
        },
        {
            rank: 3,
            name: 'Donald Newhouse',
            netWorth: 8400000000,
            age: '40',
            country: 'United States'
        },
    ];
    const defaultProps = {
        setBirthCountry,
        setCurrency,
        setName,
        setSortBy,
        nameFilter,
        currency,
        birthCountry,
        sortBy,
        birthCountryOptions,
        currencyOptions,
        sortByOptions,
        celebrities
    };

    it('should have 4 filters', () => {
        const wrapper = shallow(<CelebritiesView {...defaultProps}/>);
        expect(wrapper.find(Filter)).to.have.length(4);
    });
    it('should have 3 celebrities by default', () => {
        const wrapper = shallow(<CelebritiesView {...defaultProps}/>);
        expect(wrapper.find(CelebrityCard)).to.have.length(3);
    });
    it('should filter celebrities by country', () => {
        const props = Object.assign({}, defaultProps, {
            birthCountry: 'United States'
        });
        const wrapper = shallow(<CelebritiesView {...props}/>);
        expect(wrapper.find(CelebrityCard)).to.have.length(2);
    });
    it('should filter celebrities by name', () => {
        const props = Object.assign({}, defaultProps, {
            nameFilter: 'Joh'
        });
        const wrapper = shallow(<CelebritiesView {...props}/>);
        expect(wrapper.find(CelebrityCard)).to.have.length(1);
    });
    it('should be able to sort celebrities by age', () => {
        const props = Object.assign({}, defaultProps, {
            sortBy: 'age'
        });
        const wrapper = shallow(<CelebritiesView {...props}/>);
        expect(wrapper.find(CelebrityCard).get(0).props.age).to.equal('40');
    });
});