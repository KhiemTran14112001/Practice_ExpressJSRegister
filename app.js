const express = require('express');
const app = express();
const port = 8000;
const multer = require('multer');
const upload = multer();

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('register');
});

const arrayUser = [];
app.post('/user/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        arrayUser.push(user);
        res.render('success', {user: user});
    } else {
        res.render('error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});