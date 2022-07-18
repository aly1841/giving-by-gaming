/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://givingbygaming.org',
    generateRobotsTxt: true,
    exclude: [
        '/result',
        '_*',
        '/api/*'
    ]
};

module.exports = config;