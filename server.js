import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';

import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Especificar archivo env --env-file=.env
const port = process.env.PORT || 8000;

const app = express();

//Body Parser Middleware
app.use(express.json()); // Allow us to sent json
app.use(express.urlencoded({ extended: false })); // Allow us to send data from the form

// Logger Middleware
app.use(logger);

// Set Up a Static folder
app.use(express.static(path.join(__dirname, 'public')));
/* .join une el nombre un directorio y un archivo */

// Routes (Middleware)
app.use('/api/posts', posts)

// Page Not Found 
app.use(notFound);

// Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));