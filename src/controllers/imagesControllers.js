const {getCloudflareService} = require('../service-locator/composer');

function onNewImage(path) {
    const cloudflareService = getCloudflareService();
    return cloudflareService.uploadImages(path);
}

function onRemoveImage(id) {
    const cloudflareService = getCloudflareService()();
    return cloudflareService.removeImage(imageId);
}

module.exports = {
    onNewImage,
    onRemoveImage
}