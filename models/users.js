const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "imtiaz shawn",
        email: "imtiazshawn0@gmail.com"
    },
    {
        id: uuidv4(),
        username: "anisul islam",
        email: "anis55@gmail.com"
    },
    {
        id: uuidv4(),
        username: "rakibul islam",
        email: "rakib74@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Sheikh Farid",
        email: "sheikhfarid125@gmail.com"
    },
]

module.exports = users;