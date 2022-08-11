const path = require("path");
// const i18n = require("./next-i18next.config");

module.exports = {
  env: {
    // DOMAIN_NAME: "http://3.109.200.71",
    DOMAIN_NAME: "http://localhost:3002",
    // i18n,
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "mr-IN",
      "hi-IN",
      "kn-IN",
      "ml-IN",
      "gu-IN",
      "ta-IN",
      "te-IN",
    ],
    localePath: path.resolve("./public/locales"),
    defaultLanguage: "en",
    fallbackLng: ["en"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};
