const Client = require("./axios");
const fs = require('fs');
const FormData = require('form-data');

class Cloudflare extends Client {

    static instance;

    constructor() {
        super();
    }

    static getInstance() {
        if(!Cloudflare.instance) {
            Cloudflare.instance = new Cloudflare()
        }
        return Cloudflare.instance
    }

    async uploadImages(path) {
        const file = fs.createReadStream(path);
        const formData = new FormData();
        formData.append('file', file);
        const result = await this.client.post('/accounts/d1f1c82e1365537ebb76d514fa2413eb/images/v1', formData)
        fs.unlinkSync(path);
        return result
    }

    deleteImages(id) {
        return this.client.delete(`/accounts/d1f1c82e1365537ebb76d514fa2413eb/images/v1/${id}`)
    }
}

module.exports = Cloudflare;