export default {
    message: {
        mainTitle: null,
        secondTitle: null,
        description: null,
        reference: null,
    },
    control: {
        birthCountry: 'Show All',
        currency: 'usd',
        name: null,
        sortBy: 'rank',
        birthCountryOptions: ['Show All'],
        currencyOptions: [
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
        ],
        sortByOptions: [
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
        ],
    },
    celebrities: []
}