require("dotenv").config()
const express = require("express")
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const bodyParser = require('body-parser');
const sequelize = require('./db')
require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


const PORT = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())

//For url encoded form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
//END For url encoded form

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


//В самом конце обработка ошибок
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}

start()



