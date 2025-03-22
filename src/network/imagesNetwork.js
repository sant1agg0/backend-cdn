const express = require('express')
const routes = express.Router();
const Controller = require("../controllers/imagesControllers")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

async function imagesNetwork(request, response) {
    const file = request.file;
    const result = await Controller.onNewImage(file.path);
    response.send(result.data);
}

async function imagesDelete(req, res) {
    const id = req.params.id;
    const result = await Controller.deleteImage(id);
    res.send(result.data);
}

routes.post("/upload", upload.single('file'), imagesNetwork)
routes.delete("/delete/:id", imagesDelete)

module.exports = routes;