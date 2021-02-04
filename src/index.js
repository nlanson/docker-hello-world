const app = require('express')();

var count = 0;

app.get('/', (req, res ) => () {
    res.json({ title: 'Server is Working', message: '🚀🚀🚀', viewed: `${count} times` })
    count++;
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );