const mongoose = require('moongoose')

const connectWithDB = () => {
    mongoose
    .connect(process.env.DB_URL)
    .then(console.log('DB connection extablished'))
    .catch((err) => {
        console.log(`DB connection eroor: ${err}`)
        process.exit(1)
    })
}


module.express = connectWithDB