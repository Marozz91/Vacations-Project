import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 as uuid } from "uuid";
import fsPromises from "fs/promises";


// __dirname returns the path to the current folder:
const imagesFolder = path.join(__dirname, "..", "1-assets", "images");

// Get image path in the file system:
function getImagePath(imageName: string): string {
    return imagesFolder + "/" + imageName;
}


// save image file to disk and returns the file name:
async function saveImage(image: UploadedFile): Promise<string> {

    // Take the original extension:
    const extension = path.extname(image.name);

    const imageName = uuid() + extension;

    // Get absolute path:
    const absolutePath = getImagePath(imageName);

    // Save image to disk in the given path:
    await image.mv(absolutePath);

    // Return image name:
    return imageName;

}

// Update image, save new image to disk and return image name, delete old image from disk:
async function updateImage(image: UploadedFile, prevImageName: string): Promise<string> {

    // Delete previues image:
    await deleteImage(prevImageName);

    // Save new image:
    const imageName = saveImage(image);

    // Return image name:
    return imageName;

}


// Delete image from disk:
async function deleteImage(imageName: string) {

    try {

        // If no image sent:
        if (!imageName) return;

        // Get absolute path:
        const absolutePath = getImagePath(imageName);

        // Delete image:
        await fsPromises.unlink(absolutePath);

    } catch (error: any) {
        console.log(error.message);
    }

}


export default {
    getImagePath,
    saveImage,
    updateImage,
    deleteImage
}