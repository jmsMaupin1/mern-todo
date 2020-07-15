module.exports = {
    DATABASE: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/todos',
    APP_PORT: process.env.APP_PORT || 8000
}