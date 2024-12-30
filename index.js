const app = require("./app");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const User = require("./models/User");

const main = async() => {
    await connectDB()
    const port = 5000
    app.listen(port,() => {
        console.log("+++ Success: server running on port 5000")
    })
    
    const demoUser = [
        {name: "Piyush Yadav", email: "testpiyush@test.com", password: "123"}, 
        {"name": "Bikas Mali", email: "testbikas@test.com", password: "123"}
    ]
    const demoProduct = [
        {name: "Smartphone", description:"A very good smarthphone", price: 10000, stock: 100},
        {name: "Laptop", description:"A very good laptop", price: 100000, stock: 100} 
    ]
    
    User.insertMany(demoUser)
    Product.insertMany(demoProduct)

}

main()

// bikash.mali@goswift.in 