const express = require('express');
const path = require('path');

// Especificar archivo env --env-file=.env
const port = process.env.PORT || 8000;

const app = express();

// Set Up a Static folder
// app.use(express.static(path.join(__dirname, 'public')));
/* .join une el nombre un directorio y un archivo */

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]
app.get('/api/posts', (req, res) => {
    res.json(posts);
}) 

app.listen(port, () => console.log(`Server is running on port ${port}`));