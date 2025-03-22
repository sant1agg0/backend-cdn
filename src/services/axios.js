const axios = require('axios');

class Client {
    client;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4/',
            headers: {
                'Authorization': 'Bearer 67UVxcA8xKhXl_qbR22JoXccsDpdcQuLXLqZkuTZ'
            }
        })
    }
}

module.exports = Client;