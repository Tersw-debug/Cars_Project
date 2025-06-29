const express = require(`express`);
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
    res.send('Welcome to my static!');
});

app.get('/Html_files/HomePage.html', (req,res) => {
    console.log(req);
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
});