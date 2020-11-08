const express = require('express')

const app = express()

app.use(express.static('./clock'))
app.listen(80, () => {
    console.log('Server running on 127.0.0.1');
})