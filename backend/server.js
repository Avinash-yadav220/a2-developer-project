// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/a2developers", { useNewUrlParser: true, useUnifiedTopology: true });

// const demoSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   createdAt: { type: Date, default: Date.now }
// });

// const Demo = mongoose.model("Demo", demoSchema);

// app.post("/api/book-demo", async (req, res) => {
//   try {
//     const demo = new Demo(req.body);
//     await demo.save();
//     res.status(201).send({ message: "Form submitted" });
//   } catch (err) {
//     res.status(500).send({ error: "Submission failed" });
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });







// const mongoose = require('mongoose');
// const cors = require('cors');
// const express = require('express');
// const connectDB = require('./config/db');
// const demoRoutes = require('./routes/demoRoutes');
// require('dotenv').config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/demo', demoRoutes);

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('✅ MongoDB Atlas connected');
//     app.listen(PORT, () => {
//       console.log(`🚀 Server listening on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err.message);
//   });










// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const demoRoutes = require('./routes/demoRoutes');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Log every request
// app.use((req, res, next) => {
//   console.log(`➡️ ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.use('/api/demo', demoRoutes);

// // Catch-all route
// app.use((req, res) => {
//   res.status(404).json({ success: false, message: 'Route not found' });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('🔥 Uncaught error:', err);
//   res.status(500).json({ success: false, message: 'Internal server error' });
// });

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('✅ MongoDB Atlas connected');
//     app.listen(PORT, () => {
//       console.log(`🚀 Server listening on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err.message);
//   });









const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const demoRoutes = require("./routes/demoRoutes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", demoRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });