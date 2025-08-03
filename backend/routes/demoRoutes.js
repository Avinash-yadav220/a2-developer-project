
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