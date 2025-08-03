// const express = require('express');
// const router = express.Router();
// const DemoRequest = require('../models/DemoRequest');

// // POST /api/demo — Save form data
// router.post('/', async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     const newRequest = new DemoRequest({ name, email, message });
//     await newRequest.save();

//     res.status(201).json({ success: true, message: 'Demo request submitted successfully' });
//   } catch (error) {
//     console.error('❌ Error saving demo request:', error.message);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// module.exports = router;






// const express = require('express');
// const router = express.Router();
// const DemoRequest = require('../models/DemoRequest');

// // POST /api/demo — Save form data
// router.post('/', async (req, res) => {
//   console.log('📥 Incoming request body:', req.body);

//   try {
//     const {
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     } = req.body;

//     // Validate required fields
//     if (!name || !email || !contactNumber || !institutionName) {
//       return res.status(400).json({
//         success: false,
//         message: 'Please fill in all required fields',
//       });
//     }

//     // Create and save new demo request
//     const newRequest = new DemoRequest({
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     });

//     await newRequest.save();

//     console.log('✅ Demo request saved to MongoDB');
//     res.status(201).json({
//       success: true,
//       message: 'Demo request submitted successfully',
//     });
//   } catch (error) {
//     console.error('❌ Error saving demo request:', error.message);
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//     });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const DemoRequest = require('../models/DemoRequest');



// router.post('/', async (req, res) => {
//   console.log('📥 Incoming request body:', req.body);

//   try {
//     const {
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     } = req.body;

//     // Validate required fields
//     if (!name || !email || !contactNumber || !institutionName) {
//       console.log('⚠️ Missing required fields');
//       return res.status(400).json({
//         success: false,
//         message: 'Please fill in all required fields',
//       });
//     }

//     // Create new document
//     const newRequest = new DemoRequest({
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     });

//     console.log('🛠 Saving to MongoDB...');
//     await newRequest.save();
//     console.log('✅ Saved successfully');

//     res.status(201).json({
//       success: true,
//       message: 'Demo request submitted successfully',
//     });
//   } catch (error) {
//     console.error('❌ Server error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//     });
//   }
// });

// module.exports = router;











// const express = require('express');
// const router = express.Router();
// const DemoRequest = require('../models/DemoRequest');

// // Test route
// router.get('/ping', (req, res) => {
//   console.log('🔔 Ping route hit');
//   res.json({ success: true, message: 'Demo route is working' });
// });

// // POST /api/demo — Save form data
// router.post('/', async (req, res) => {
//   console.log('📥 Incoming request body:', req.body);

//   try {
//     const {
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     } = req.body;

//     // Validate required fields
//     if (!name || !email || !contactNumber || !institutionName) {
//       console.log('⚠️ Missing required fields');
//       return res.status(400).json({
//         success: false,
//         message: 'Please fill in all required fields',
//       });
//     }

//     // Create and save new demo request
//     const newRequest = new DemoRequest({
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     });

//     await newRequest.save();
//     console.log('✅ Demo request saved to MongoDB');

//     res.status(201).json({
//       success: true,
//       message: 'Demo request submitted successfully',
//     });
//   } catch (error) {
//     console.error('❌ Server error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error',
//     });
//   }
// });

// module.exports = router;













// const express = require("express");
// const router = express.Router();
// const DemoRequest = require("../models/DemoRequest");

// router.post("/demo", async (req, res) => {
//   try {
//     const { name, email, contactNumber, institutionName, requirements } = req.body;

//     // Basic validation
//     if (!name || !email || !contactNumber) {
//       return res.status(400).json({ message: "Name, email, and contact number are required." });
//     }

//     const newRequest = new DemoRequest({
//       name,
//       email,
//       contactNumber,
//       institutionName,
//       requirements,
//     });

//     await newRequest.save();
//     res.status(200).json({ message: "Demo request submitted successfully." });
//   } catch (err) {
//     console.error("❌ Error in /demo route:", err);
//     res.status(500).json({ message: "Submission failed due to server error." });
//   }
// });

// module.exports = router;













const express = require("express");
const router = express.Router();
const DemoRequest = require("../models/DemoRequest");

router.post("/demo", async (req, res) => {
  try {
    const { name, email, contactNumber, institutionName, requirements } = req.body;

    // Basic validation
    if (!name || !email || !contactNumber) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and contact number are required.",
      });
    }

    const newRequest = new DemoRequest({
      name,
      email,
      contactNumber,
      institutionName,
      requirements,
    });

    await newRequest.save();

    res.status(200).json({
      success: true,
      message: "Demo request submitted successfully.",
    });
  } catch (err) {
    console.error("❌ Error in /demo route:", err);
    res.status(500).json({
      success: false,
      message: "Submission failed due to server error.",
    });
  }
});

module.exports = router;