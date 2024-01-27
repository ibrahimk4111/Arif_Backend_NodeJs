require("dotenv").config()

const config = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    cloud_name: process.env.CLOUD_NAME,
    cloud_api: process.env.CLOUD_API,
    cloud_secret: process.env.CLOUD_SECRET,
    secretKey: process.env.SOME_LONG_UNGUESSABLE_STRING,
    smtpMail: process.env.SMTP_EMAIL,
    smtpPassword: process.env.SMTP_GENERATED_PASSWORD,
    serverUrl: process.env.SERVER_URL
}

module.exports = config;