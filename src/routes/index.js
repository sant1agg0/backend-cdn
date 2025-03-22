const NetworkImages = require("../network/imagesNetwork");

function routes (app) {
    app.use("/images", NetworkImages)
}

module.exports = routes;
//CommonJS