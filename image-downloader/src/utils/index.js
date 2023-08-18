const Joi = require('joi');

const hasQueryParam = (url) => {
    const queryParamRegex = /\?.+=/;
    return queryParamRegex.test(url);
};

const validateUrls = (urls) => {
    const urlSchema = Joi.string().uri();

    const validUrls = urls.filter((url) => {
        const { error } = urlSchema.validate(url);
        return !error;
    });

    return validUrls;
};

module.exports = { hasQueryParam, validateUrls };
