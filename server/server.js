// IMPORTANT: Import instrument.js at the very top
import  './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clerkWebHooks } from './controllers/webhooks.js';
import companyRoutes from './routes/companyRoutes.js'

// Initialize Express
const app = express();

// Connect to database
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebHooks)
app.use('/api/company',companyRoutes)

// Register Sentry error handler (AFTER routes, only in production)


// Optional final fallback error handler
app.use((err, req, res, next) => {
  console.error(err); // log locally
  res.status(500).send("Something went wrong");
});

// Port
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
