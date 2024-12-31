const mongoose = require("mongoose");
const db = mongoose.connect(ProcessingInstruction.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

module.exports = db;