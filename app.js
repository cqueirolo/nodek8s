const express = require('express');
const axios = require('axios');

const app = express()
app.use(express.json())

const port = 5800

app.get('/ping', (req, res) => {
    res.status(200).send({
        message: 'pong'
    })
})

app.get('/api-docs', async (req, res) => {
    const response = await axios.get('https://fiuber-api-gateway.herokuapp.com/ping')
    res.status(200).send(response.data)
})


app.listen(port, () => {
    console.log(`port: ${port}`)
})