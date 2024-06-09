const mongoose = require("mongoose")

async function dbconnect() {
    // database connection
    mongoose.connect("mongodb+srv://mahamilyas211:maham255@cluster0.6rf32mu.mongodb.net/proshare")
    // mongoose.connect("mongodb://localhost:27017")
}
module.exports = dbconnect