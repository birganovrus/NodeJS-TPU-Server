const crypto = require('crypto');

const appId = 4189788; // <-- App Id(in VK settings)
const secretKey = "42RCTYnfCfJrWO5jLOC1";// <-- Secret Key(in VK settings)

module.exports = {
    checkKey: function (id, authKey) {
        var calculatedAuthKey = crypto.createHash('md5').update(appId + '_' + id + '_' + secretKey).digest("hex");

        return calculatedAuthKey === authKey;
    }
};