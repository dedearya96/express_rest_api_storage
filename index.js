const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('./'))

const Router = require('./router.js')

app.use('/', Router);

app.listen(port, () => {
    console.log('app running at http://localhost:' + port)
})