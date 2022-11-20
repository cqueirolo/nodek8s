const express = require('express');

const app = express()
app.use(express.json())

const port = 5800

app.get('/ping', (req, res) => {
    res.status(200).send({
        message: 'pong'
    })
})

app.listen(port, () => {
    console.log(`port: ${port}`)
})