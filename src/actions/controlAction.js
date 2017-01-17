import * as Type from './Type';

export function setCurrencyOptions(values) {
    return {
        type: Type.SET_CURRENCY_OPTIONS,
        values
    };
}
export function setBirthCountry(country) {
    return {
        type: Type.SET_BIRTH_COUNTRY,
        country
    };
}
export function setCurrency(currency) {
    return {
        type: Type.SET_CURRENCY,
        currency
    };
}
export function setName(name) {
    return {
        type: Type.SET_NAME,
        name
    };
}
export function setSortBy(sortBy) {
    return {
        type: Type.SET_SORT_BY,
        sortBy
    };
}
export function setBirthCountryOptions(options) {
    return {
        type: Type.SET_BIRTH_COUNTRY_OPTIONS,
        options
    };
}