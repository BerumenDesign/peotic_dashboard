const store = {};

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
                    mixed: 35,
                    dynamic: 42
                },
                postalCode: 'M4P',
                coordinates: [ -79.60625629999998, 43.6486238 ],
                avgBalance: 5000,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 10,
                    '65': 10
                }
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
                    mixed: 33,
                    dynamic: 40
                },
                postalCode: 'M4N',
                coordinates: [ -79.36214970000003, 43.75296289999999 ],
                avgBalance: 7800,
                ages: {
                    '18-24': 15,
                    '25-34': 20,
                    '35-44': 40,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
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
                    mixed: 40,
                    dynamic: 30
                },
                postalCode: 'N5C',
                coordinates: [ -79.44609639999999, 43.638616 ],
                avgBalance: 12000,
                ages: {
                    '18-24': 45,
                    '25-34': 20,
                    '35-44': 15,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 5
                }
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
                    mixed: 48,
                    dynamic: 30
                },
                postalCode: 'M5P',
                coordinates: [ -79.4462398, 43.6773002 ],
                avgBalance: 5700,
                ages: {
                    '18-24': 18,
                    '25-34': 34,
                    '35-44': 21,
                    '45-54': 10,
                    '55-64': 7,
                    '65': 10
                }
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
                    mixed: 26,
                    dynamic: 40
                },
                postalCode: 'M9N',
                coordinates: [ -79.56122019999998, 43.8474142 ],
                avgBalance: 6600,
                ages: {
                    '18-24': 32,
                    '25-34': 27,
                    '35-44': 22,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 4
                }
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
                    mixed: 34,
                    dynamic: 50
                },
                postalCode: 'M6G',
                coordinates: [ -79.42839909999998, 43.670171 ],
                avgBalance: 9400,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
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
                    mixed: 42,
                    dynamic: 40
                },
                postalCode: 'M4M',
                coordinates: [ -79.36215649999997, 43.765405 ],
                avgBalance: 2800,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
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
                    mixed: 32,
                    dynamic: 40
                },
                postalCode: 'M4K',
                coordinates: [ -79.30804990000001, 43.6867995 ],
                avgBalance: 4000,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
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
                    mixed: 30,
                    dynamic: 55
                },
                postalCode: 'M4W',
                coordinates: [ -79.37451249999998, 43.672278 ],
                avgBalance: 8800,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
            }
        ]
    };
};

store.getCompetition = function () {
    return {
        stores: [
            {
                id: 'A0001',
                name: 'A0001 Eglinton Ave',
                transactions: 162233,
                sales: 1625323,
                genderRatio: {
                    male: 45,
                    female: 55
                },
                loyalty: {
                    loyal: 23,
                    mixed: 35,
                    dynamic: 42
                },
                postalCode: 'M4P',
                coordinates: [ -79.60625629999998, 43.6486238 ],
                avgBalance: 5000,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 10,
                    '65': 10
                }
            },
            {
                id: 'A0002',
                name: 'A0002 York Mills Rd',
                transactions: 113053,
                sales: 1345234,
                genderRatio: {
                    male: 75,
                    female: 25
                },
                loyalty: {
                    loyal: 27,
                    mixed: 33,
                    dynamic: 40
                },
                postalCode: 'M4N',
                coordinates: [ -79.36214970000003, 43.75296289999999 ],
                avgBalance: 7800,
                ages: {
                    '18-24': 15,
                    '25-34': 20,
                    '35-44': 40,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
            },
            {
                id: 'A0003',
                name: 'A0003 King Street',
                transactions: 112000,
                sales: 1346325,
                genderRatio: {
                    male: 56,
                    female: 44
                },
                loyalty: {
                    loyal: 30,
                    mixed: 40,
                    dynamic: 30
                },
                postalCode: 'N5C',
                coordinates: [ -79.44609639999999, 43.638616 ],
                avgBalance: 12000,
                ages: {
                    '18-24': 45,
                    '25-34': 20,
                    '35-44': 15,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 5
                }
            },
            {
                id: 'A0004',
                name: 'A0004 St Claire Ave',
                transactions: 123000,
                sales: 2634453,
                genderRatio: {
                    male: 45,
                    female: 55
                },
                loyalty: {
                    loyal: 22,
                    mixed: 48,
                    dynamic: 30
                },
                postaleCode: 'M5P',
                coordinates: [ -79.4462398, 43.6773002 ],
                avgBalance: 5700,
                ages: {
                    '18-24': 18,
                    '25-34': 34,
                    '35-44': 21,
                    '45-54': 10,
                    '55-64': 7,
                    '65': 10
                }
            },
            {
                id: 'A0005',
                name: 'A0005 Weston Road',
                transactions: 122354,
                sales: 1194344,
                genderRatio: {
                    male: 68,
                    female: 32
                },
                loyalty: {
                    loyal: 34,
                    mixed: 26,
                    dynamic: 40
                },
                postalCode: 'M9N',
                coordinates: [ -79.56122019999998, 43.8474142 ],
                avgBalance: 6600,
                ages: {
                    '18-24': 32,
                    '25-34': 27,
                    '35-44': 22,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 4
                }
            },
            {
                id: 'A0006',
                name: 'A0006 Dupont Street',
                transactions: 116233,
                sales: 2223322,
                genderRatio: {
                    male: 54,
                    female: 46
                },
                loyalty: {
                    loyal: 16,
                    mixed: 34,
                    dynamic: 50
                },
                postalCode: 'M6G',
                coordinates: [ -79.42839909999998, 43.670171 ],
                avgBalance: 9400,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
            },
            {
                id: 'A0007',
                name: 'A0007 Leslie Street',
                transactions: 243443,
                sales: 3163562,
                genderRatio: {
                    male: 49,
                    female: 51
                },
                loyalty: {
                    loyal: 18,
                    mixed: 42,
                    dynamic: 40
                },
                postalCode: 'M4M',
                coordinates: [ -79.36215649999997, 43.765405 ],
                avgBalance: 2800,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
            },
            {
                id: 'A0008',
                name: 'A0008 Danforth Ave',
                transactions: 134323,
                sales: 2182333,
                genderRatio: {
                    male: 39,
                    female: 61
                },
                loyalty: {
                    loyal: 28,
                    mixed: 32,
                    dynamic: 40
                },
                postalCode: 'M4K',
                coordinates: [ -79.30804990000001, 43.6867995 ],
                avgBalance: 4000,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
            },
            {
                id: 'A0009',
                name: 'A0009 Bloor Street',
                transactions: 244434,
                sales: 2412332,
                genderRatio: {
                    male: 52,
                    female: 48
                },
                loyalty: {
                    loyal: 15,
                    mixed: 30,
                    dynamic: 55
                },
                postalCode: 'M4W',
                coordinates: [ -79.37451249999998, 43.672278 ],
                avgBalance: 8800,
                ages: {
                    '18-24': 20,
                    '25-34': 30,
                    '35-44': 20,
                    '45-54': 10,
                    '55-64': 5,
                    '65': 10
                }
            }
        ]
    };
};

export default store;