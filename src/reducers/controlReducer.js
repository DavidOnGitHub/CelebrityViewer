import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.control, action) => {
    switch (action.type) {
        case Type.SET_CURRENCY_OPTIONS:
            return Object.assign({}, state, {
                currencyOptions: [
                    {
                        code: 'usd',
                        name: 'US Dollar',
                        display: '$USD',
                        value: action.values.usDollarValue
                    },
                    {
                        code: 'aud',
                        name: 'Australian Dollar',
                        display: '$AUD',
                        value: action.values.ausDollarValue
                    },
                    {
                        code: 'eur',
                        name: 'Euro',
                        display: '\u{20ac}',
                        value: action.values.euroValue
                    }
                ]
            });
        case Type.SET_BIRTH_COUNTRY_OPTIONS:
            return Object.assign({}, state, {
                birthCountryOptions: ['Show All', ...action.options]
            });
        case Type.SET_BIRTH_COUNTRY:
            return Object.assign({}, state, {
                birthCountry: action.country
            });
        case Type.SET_CURRENCY:
            return Object.assign({}, state, {
                currency: action.currency
            });
        case Type.SET_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        case Type.SET_SORT_BY:
            return Object.assign({}, state, {
                sortBy: action.sortBy
            });
        default:
            return state;
    }
}