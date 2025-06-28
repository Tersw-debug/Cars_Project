const express = require(`express`);
const app = express();

app.use(express.static("public"));

app.get('/', (req,res) =>{
    res.send('Welcome to my static!');
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
});