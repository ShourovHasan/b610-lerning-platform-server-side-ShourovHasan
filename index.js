const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('AIUB Portal API Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

app.get('/allCourses/courses', (req, res) => {
    res.send(courses);
});

app.get('/allCourses/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courses);
    }
    else {
        const categoryCourses = courses.filter(nw => nw.category_id === id);
        res.send(categoryCourses);
    }
})
app.get('/allCourses/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourses = courses.find(course => course.id === id);
    res.send(selectedCourses);
    // console.log(req.params.id);
})
app.get('/allCourses/courses/checkout/:id', (req, res) => {
    const id = req.params.id
    const selectedCourses = courses.find(course => course.id === id);
    res.send(selectedCourses);
    // console.log(req.params.id);
})

app.listen(port, () => {
    console.log('AIUB Portal Server running on port', port);
})