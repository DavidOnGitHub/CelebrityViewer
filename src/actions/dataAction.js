import * as Type from './Type';
import * as celebrityAction from './celebrityAction';
import * as controlAction from './controlAction';
import * as messageAction from './messageAction';

export function fetchAllData() {
    const jsonData = require('../celebrityRichList.json');
    return (dispatch) => {
        dispatch(messageAction.setMessages({
            mainTitle: jsonData.pageTitleH1,
            secondTitle: jsonData.pageTitleH2,
            description: jsonData.description,
            reference: jsonData.referenceLink
        }));

        dispatch(controlAction.setCurrencyOptions({
            ausDollarValue: jsonData.australianDollarValue,
            usDollarValue: jsonData.usDollarValue,
            euroValue: jsonData.euroValue
        }));

        const celebrityList = jsonData.celebrityList;

        const allCountries = celebrityList && celebrityList.filter((celebrity, index) => {
                return index === celebrityList.findIndex(item => item.country === celebrity.country);
            }).map(celebrity => celebrity.country);
        dispatch(controlAction.setBirthCountryOptions(allCountries));

        dispatch(celebrityAction.setCelebrityList(celebrityList));
    };
}