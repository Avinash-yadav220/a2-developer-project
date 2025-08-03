

import React, { useState } from "react";

export default function DemoForm({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    institutionName: "",
    requirements: "",
  });

  const [status, setStatus] = useState(null);

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📤 handleSubmit triggered");
    console.log("Form data:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("✅ Response:", result);

      if (response.ok && result.success) {
        alert("Demo request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          institutionName: "",
          requirements: "",
        });
        setStatus({ success: true, message: result.message });
      } else {
        alert("Submission failed: " + result.message);
        setStatus({ success: false, message: result.message });
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error.message);
      alert("Submission failed due to server error.");
      setStatus({ success: false, message: "Server error occurred." });
    }
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-40 z-40" />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-lg p-6 flex flex-col text-gray-800 overflow-y-auto">
        <button
          onClick={onClose}
          className="self-end text-gray-500 hover:text-black mb-4 text-2xl font-bold"
          aria-label="Close form"
        >
        </button>
        <h2 className="text-xl font-semibold mb-2">Get In Touch</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Have questions about our Products? Fill out the form below to get a call with us.
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">+91</span>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number *"
              required
              value={formData.contactNumber}
              onChange={handleChange}
              className="flex-grow bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <input
            type="text"
            name="institutionName"
            placeholder="Institution Name *"
            required
            value={formData.institutionName}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="requirements"
            placeholder="Requirements"
            rows={4}
            value={formData.requirements}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {status && (
            <div
              className={`text-sm ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </div>
          )}
          <button
            type="submit"
            className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}