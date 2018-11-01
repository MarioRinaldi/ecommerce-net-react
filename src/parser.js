

export default class Parser {
    constructor() {
        this.API_URL = 'https://api.amxrest.net/v2/parse';
        return new Promise((resolve, reject) => {
            new window.AssineJaParser({
                isAssinante: 1,
                subscriber: false,
                portability: false,
                portabilityMobile: false,
                dataFile: `${this.API_URL}?zipcode=07744400&number=0&company=net&offshoot=residencial&forceCompany=true&info=true`
            }, function (asd) {
                console.log('this', this);
                console.log('asd', asd);
                return resolve(this);
            });
        });
    }
    get() {
        return {}
    }
};