'use strict';

module.exports.getPassage = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            passage: 'I shall never be ashamed of citing a bad author if the line is good.',
            attribution: 'Seneca'
        }),
    };
    callback(null, response);
};