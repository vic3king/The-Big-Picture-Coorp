import Joi from 'joi';
import path from 'path';

const hasQueryParam = (url) => {
    const queryParamRegex = /\?.+=/;
    return queryParamRegex.test(url);
};

const validateUrls = (urls) => {
    const urlSchema = Joi.string().uri(); // consider switching to regex

    const validUrls = urls.filter((url) => {
        const { error } = urlSchema.validate(url);
        return !error;
    });

    return validUrls;
};

const generateImagePath = (url, destinationFolder) => {
    let imageFileName = path.basename(url);

    if (hasQueryParam(imageFileName)) {
        imageFileName = imageFileName.split('?')[0];
    }

    const extension = path.extname(imageFileName);
    const fileNameWithoutExtension = path.basename(imageFileName, extension);
    const uniqueTimestamp = Date.now().toString();

    imageFileName = `${fileNameWithoutExtension}_${uniqueTimestamp}${extension}`;

    const imagePath = path.join(destinationFolder, imageFileName);

    return imagePath;
};
export { hasQueryParam, validateUrls, generateImagePath };
