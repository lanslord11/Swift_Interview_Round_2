const express = require('express')
const productRouter = require('./routes/productRoutes')
const cartRouter = require('./routes/cartRoutes')
const orderRouter = require('./routes/orderRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

app.use(express.json())
// app.use(cors())

app.use('/api', productRouter)
app.use('/api', cartRouter)
app.use('/api', orderRouter)
app.use('/api', userRouter)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({"message": "unable to start server"})
})

module.exports = app;