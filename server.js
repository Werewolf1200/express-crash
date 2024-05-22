import express from 'express';
import path from 'path';

import posts from './routes/posts.js';

// Especificar archivo env --env-file=.env
const port = process.env.PORT || 8000;

const app = express();

// Set Up a Static folder
// app.use(express.static(path.join(__dirname, 'public')));
/* .join une el nombre un directorio y un archivo */

// Routes (Middleware)
app.use('/api/posts', posts)

app.listen(port, () => console.log(`Server is running on port ${port}`));