const multer = require('multer'),
    path = require('path'), fs = require('fs')

// Set Storage Engine
const imageStorage = multer.diskStorage({
    destination: './public/uploads/images',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + `${Date.now()}` + path.extname(file.originalname));
    }
});

// Init Upload
const uploadImage = multer({
    storage: imageStorage,
    limits: { fileSize: 3000000 }, //1000000=1MB
    fileFilter: function (req, file, cb) {
        checkFileTypeForImages(file, cb)
    }
}).single('image');

// Check File Type
function checkFileTypeForImages(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: PNG or JPG Images Only!');
    }
}

module.exports = uploadImage