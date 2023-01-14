const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
const port = 3000
const processingData = require('./index')
app.post('/', (req, res) => {
    try {
        console.log(req.body);
        processingData(req.body)
        return res.send('Ok')
    }catch(e) {
        console.log(e);
        return res.send('Fail')
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})