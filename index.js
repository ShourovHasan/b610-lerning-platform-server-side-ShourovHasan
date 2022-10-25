const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

// const categories = require('./data/categories.json');
// const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('AIUB Portal API Running');
});

// app.get('/courses-categories', (req, res) => {
//     res.send(categories);
// });

// app.get('/courses', (req, res) => {
//     res.send(courses);
// });

// app.get('/category/:id', (req, res) => {
//     const id = req.params.id;
//     if (id === '08') {
//         res.send(courses);
//     }
//     else {
//         const categoryNews = courses.filter(nw => nw.category_id === id);
//         res.send(categoryNews);
//     }
// })
// app.get('/courses/:id', (req, res) => {
//     const id = req.params.id
//     const selectedNews = courses.find(nw => nw.id === id);
//     res.send(selectedNews);
//     // console.log(req.params.id);
// })

app.listen(port, () => {
    console.log('AIUB Portal Server running on port', port);
})