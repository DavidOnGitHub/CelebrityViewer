import React from 'react';
import {connect} from 'react-redux';
import * as controlAction from '../actions/controlAction';
import Filter from './Filter';
import CelebrityCard from './CelebrityCard';

export function CelebritiesView(props) {
    const {celebrities,
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
        sortByOptions} = props;
    let filteredCelebrities = [...celebrities];

    if (nameFilter) {
        filteredCelebrities = filteredCelebrities.filter(celebrity => celebrity.name.toLowerCase().indexOf(nameFilter.toLowerCase()) >= 0);
    }
    if (birthCountry !== 'Show All') {
        filteredCelebrities = filteredCelebrities.filter(celebrity => celebrity.country === birthCountry);
    }
    if (sortBy) {
        filteredCelebrities.sort((celebrity1, celebrity2) => {
            if (typeof celebrity1[sortBy] === 'number') {
                return celebrity1[sortBy] - celebrity2[sortBy];
            } else if (!Object.is(parseInt(celebrity1[sortBy]), NaN)) {
                return parseInt(celebrity1[sortBy]) - parseInt(celebrity2[sortBy]);
            } else if (typeof celebrity1[sortBy] === 'string') {
                return celebrity1[sortBy].toLowerCase() > celebrity2[sortBy].toLowerCase() ? 1 : -1;
            }
        });
    }

    const currentCurrency = currencyOptions.find(option => option.code === currency);

    return (
        <div className="celebrities-view">
            <div className="filter-section">
                <Filter label='Birth Country'
                        options={birthCountryOptions.map(option => ({
                            value: option,
                            name: option
                        }))}
                        value={birthCountry}
                        onSelect={(e) => setBirthCountry(e.target.value)}/>
                <Filter label='Currency'
                        options={currencyOptions.map(option => ({
                            value: option.code,
                            name: option.name
                        }))}
                        value={currency}
                        onSelect={(e) => setCurrency(e.target.value)}/>
                <Filter label='Search Name'
                        placeholder='Search'
                        onTextChange={(e) => setName(e.target.value)}/>
                <Filter label='Order By'
                        options={sortByOptions.map(option => ({
                            value: option.code,
                            name: option.name
                        }))}
                        value={sortBy}
                        onSelect={(e) => setSortBy(e.target.value)}/>
            </div>
            <div className="celebrity-cards-section">
                {filteredCelebrities.length ? filteredCelebrities.map(celebrity => (
                    <CelebrityCard rank={celebrity.rank}
                                   name={celebrity.name}
                                   netWorth={celebrity.netWorth}
                                   age={celebrity.age}
                                   country={celebrity.country}
                                   currency={currentCurrency}
                                   key={celebrity.rank}
                    />
                )) : <CelebrityCard noResult={true}/>
                }
            </div>
        </div>
    );
}
export default connect(
    (state) => ({
        celebrities: state.celebrities,
        nameFilter: state.control.name,
        birthCountry: state.control.birthCountry,
        birthCountryOptions: state.control.birthCountryOptions,
        currency: state.control.currency,
        currencyOptions: state.control.currencyOptions,
        sortBy: state.control.sortBy,
        sortByOptions: state.control.sortByOptions
    }),
    (dispatch) => ({
        setBirthCountry: (country) => dispatch(controlAction.setBirthCountry(country)),
        setCurrency: (currency) => dispatch(controlAction.setCurrency(currency)),
        setName: (name) => dispatch(controlAction.setName(name)),
        setSortBy: (sortBy) => dispatch(controlAction.setSortBy(sortBy))
    })
)(CelebritiesView);