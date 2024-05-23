import express from 'express';
import path from 'path';

import posts from './routes/posts.js';

import logger from './middleware/logger.js';

// Especificar archivo env --env-file=.env
const port = process.env.PORT || 8000;

const app = express();

//Body Parser Middleware
app.use(express.json()); // Allow us to sent json
app.use(express.urlencoded({ extended: false })); // Allow us to send data from the form

// Logger Middleware
app.use(logger);

// Set Up a Static folder
// app.use(express.static(path.join(__dirname, 'public')));
/* .join une el nombre un directorio y un archivo */

// Routes (Middleware)
app.use('/api/posts', posts)

app.listen(port, () => console.log(`Server is running on port ${port}`));