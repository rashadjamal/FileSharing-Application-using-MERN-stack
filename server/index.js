import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send("Hi, I am root")
})

const PORT = 8080;

app.listen(PORT, () =>
    console.log(`Server is runnning on port ${PORT}`))

