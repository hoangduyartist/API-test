const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 84;

let MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://vannhan:vannhan@chat-realtime-gfzew.mongodb.net/testAPI?retryWrites=true&w=majority";

const secretString = "secret12345"

module.exports = {
    HOST,
    PORT,
    MONGODB_URI,
    secretString,
}