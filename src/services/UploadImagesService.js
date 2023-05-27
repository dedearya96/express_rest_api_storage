const sharp = require('sharp')
const fs = require('fs')
const uploadSingleImages = async (req, path) => {
    const { buffer, originalname } = req.file;
    const ref = originalname;
    fs.access('./storage/' + path['path_url'], async (error) => {
        if (error) {
            fs.mkdirSync('./storage/' + path['path_ori'], { recursive: true });
            fs.mkdirSync('./storage/' + path['path_large_thumbnail'], { recursive: true });
            fs.mkdirSync('./storage/' + path['path_medium_thumbnail'], { recursive: true });
            fs.mkdirSync('./storage/' + path['path_small_thumbnail'], { recursive: true });
        }
        await sharp(buffer)
            .jpeg({ quality: 90 })
            .toFile('./storage/' + path['path_ori'] + '/' + ref);
        await sharp(buffer)
            .jpeg({ quality: 80 })
            .toFile('./storage/' + path['path_large_thumbnail'] + '/' + ref);
        await sharp(buffer)
            .jpeg({ quality: 50 })
            .toFile('./storage/' + path['path_medium_thumbnail'] + '/' + ref);
        await sharp(buffer)
            .jpeg({ quality: 20 })
            .toFile('./storage/' + path['path_small_thumbnail'] + '/' + ref);
    });

    const data = {
        'files_ori': path['path_ori'] + '/' + ref,
        'files_large_thumbnail': path['path_large_thumbnail'] + '/' + ref,
        'files_medium_thumbnail': path['path_medium_thumbnail'] + '/' + ref,
        'files_small_thumbnail': path['path_small_thumbnail'] + '/' + ref
    };
    return data
}

const uploadUpdateImages = async (req, path) => {
    const { buffer, originalname } = req.file;
    const ref = originalname;
    fs.access('./storage/' + path['path_url'], async (error) => {
        if (error) {
            fs.mkdirSync('./storage/' + path['path_large_thumbnail'], { recursive: true });
            fs.mkdirSync('./storage/' + path['path_small_thumbnail'], { recursive: true });
        }
        await sharp(buffer)
            .jpeg({ quality: 80 })
            .toFile('./storage/' + path['path_large_thumbnail'] + '/' + ref);
        await sharp(buffer)
            .jpeg({ quality: 20 })
            .toFile('./storage/' + path['path_small_thumbnail'] + '/' + ref);
    });

    const data = {
        'files_large_thumbnail': path['path_large_thumbnail'] + '/' + ref,
        'files_small_thumbnail': path['path_small_thumbnail'] + '/' + ref
    };
    return data
}

module.exports = {
    uploadSingleImages, uploadUpdateImages
}