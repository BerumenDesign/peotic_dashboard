let store = {};

store.get = function () {
    return {
        stores: [
            {
                id: 'A0001',
                name: 'A0001 Eglinton Ave',
                transactions: 42233,
                sales: 425323,
                genderRatio: {
                    male: 45,
                    female: 55
                },
                loyalty: {
                    loyal: 23,
                    mix: 35,
                    dynamic: 42
                },
                postalCode: 'M4P'
            },
            {
                id: 'A0002',
                name: 'A0002 York Mills Rd',
                transactions: 25000,
                sales: 245234,
                genderRatio: {
                    male: 75,
                    female: 25
                },
                loyalty: {
                    loyal: 27,
                    mix: 33,
                    dynamic: 40
                },
                postalCode: 'M4N'
            },
            {
                id: 'A0003',
                name: 'A0003 King Street',
                transactions: 32000,
                sales: 345325,
                genderRatio: {
                    male: 56,
                    female: 44
                },
                loyalty: {
                    loyal: 30,
                    mix: 40,
                    dynamic: 30
                },
                postalCode: 'N5C'
            },
            {
                id: 'A0004',
                name: 'A0004 St Claire Ave',
                transactions: 55000,
                sales: 634453,
                genderRatio: {
                    male: 45,
                    female: 55
                },
                loyalty: {
                    loyal: 22,
                    mix: 48,
                    dynamic: 30
                },
                postaleCode: 'M5P'
            },
            {
                id: 'A0005',
                name: 'A0005 Weston Road',
                transactions: 32354,
                sales: 394344,
                genderRatio: {
                    male: 68,
                    female: 32
                },
                loyalty: {
                    loyal: 34,
                    mix: 26,
                    dynamic: 40
                },
                postalCode: 'M9N'
            },
            {
                id: 'A0006',
                name: 'A0006 Dupont Street',
                transactions: 44233,
                sales: 523322,
                genderRatio: {
                    male: 54,
                    female: 46
                },
                loyalty: {
                    loyal: 16,
                    mix: 34,
                    dynamic: 50
                },
                postalCode: 'M6G'
            },
            {
                id: 'A0007',
                name: 'A0007 Leslie Street',
                transactions: 63443,
                sales: 763562,
                genderRatio: {
                    male: 49,
                    female: 51
                },
                loyalty: {
                    loyal: 18,
                    mix: 42,
                    dynamic: 40
                },
                postalCode: 'M4M'
            },
            {
                id: 'A0008',
                name: 'A0008 Danforth Ave',
                transactions: 54323,
                sales: 682333,
                genderRatio: {
                    male: 39,
                    female: 61
                },
                loyalty: {
                    loyal: 28,
                    mix: 32,
                    dynamic: 40
                },
                postalCode: 'M4K'
            },
            {
                id: 'A0009',
                name: 'A0009 Bloor Street',
                transactions: 58434,
                sales: 612332,
                genderRatio: {
                    male: 52,
                    female: 48
                },
                loyalty: {
                    loyal: 15,
                    mix: 30,
                    dynamic: 55
                },
                postalCode: 'M4W'
            }
        ]
    };
};

export default store;