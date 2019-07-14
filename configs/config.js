const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 84;

const secretString = "secret12345"

module.exports = {
    HOST,
    PORT,
    secretString,
}