require("dotenv").config()

const config = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    cloud_name: process.env.CLOUD_NAME,
    cloud_api: process.env.CLOUD_API,
    cloud_secret: process.env.CLOUD_SECRET
}

module.exports = config