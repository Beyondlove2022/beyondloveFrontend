const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["en", "mr-IN", "hi-IN", "kn-IN", "ml-IN", "gu-IN", "ta-IN", "te-IN"],
        localePath: path.resolve("./public/locales"),
        defaultLanguage: "en",
        fallbackLng: ["en"],
    },
}