const { connect } = require("mongoose")

const connectDB = async() => {
    // mongoose.connect('mongodb://username:password@host:port/database?options...');
    const mongoDBConnUrl = "mongodb://127.0.0.1:27017/myapp"
    try{
        console.log("+++ Info: try to connect to mongodb")
        await connect(mongoDBConnUrl)
        console.log("+++ Success: connectecd to mongodb")
    } catch(error) {
        console.log("--- Error: error connecting to mongodb", error)
        process.exit(1)
    }
}

module.exports = connectDB