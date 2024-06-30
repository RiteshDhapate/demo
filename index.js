import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { 
    res.send("love you ❤️");
});

app.listen(2000, () => {
    console.log("server listening on 2000")
});