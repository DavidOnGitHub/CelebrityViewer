import React from 'react';
import {connect} from 'react-redux';
import Filter from './Filter';

export default (props) => {
    const {rank, name, netWorth, age, country, currency, noResult} = props;

    return (
        <div className="celebrity-card">
            <div className="celebrity-card-header">
                {noResult ? 'No Results Found' : `No: ${rank}`}
            </div>
            {!noResult &&
            <div className="celebrity-card-body">
                <div className="celebrity-card-item">
                    Name: {name}
                </div>
                <div className="celebrity-card-item">
                    Net Worth: {currency.display} {parseInt(netWorth / currency.value).toLocaleString()}
                </div>
                <div className="celebrity-card-item">
                    Age: {age}
                </div>
                <div className="celebrity-card-item">
                    Country of Birth: {country}
                </div>
            </div>
        }
        </div>
    );
}