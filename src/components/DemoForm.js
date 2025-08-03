// import React, { useState } from "react";

// export default function DemoForm({ open, onClose }) {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [success, setSuccess] = useState(false);

//   if (!open) return null;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/api/book-demo", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form)
//     });
//     if (res.ok) {
//       setSuccess(true);
//       setForm({ name: "", email: "", message: "" });
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
//       <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
//         <button
//           className="absolute right-4 top-4 text-gray-400 hover:text-gray-900"
//           onClick={onClose}
//         >✕</button>
//         <h2 className="text-xl font-semibold mb-4">Book A Demo</h2>
//         {success ? (
//           <div className="text-green-700 font-medium">Form submitted!</div>
//         ) : (
//           <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
//             <input
//               className="border px-3 py-2 rounded"
//               name="name" required
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//             />
//             <input
//               className="border px-3 py-2 rounded"
//               name="email" required type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <textarea
//               className="border px-3 py-2 rounded"
//               name="message"
//               placeholder="What would you like to discuss?"
//               value={form.message}
//               onChange={handleChange}
//             />
//             <button className="bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700">Submit</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }









// import React from "react";

// export default function DemoForm({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={onClose}
//         className="fixed inset-0 bg-black bg-opacity-40 z-40"
//       ></div>

//       {/* Slide-in panel */}
//       <div className="fixed top-0 left-0 h-full w-96 bg-white z-50 shadow-lg p-6 flex flex-col">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="self-end text-gray-600 hover:text-gray-900 mb-4 text-2xl font-bold"
//           aria-label="Close form"
//         >
//           ×
//         </button>

//         <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
//         <p className="text-gray-600 mb-6 text-sm">
//           Have questions about our Products? Fill out the form below to get a call with us.
//         </p>

//         <form className="flex flex-col gap-4" onSubmit={(e) => {
//           e.preventDefault();
//           // Add your submit handler function here or pass as prop
//         }}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name *"
//             required
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email *"
//             required
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="flex items-center gap-2">
//             <span className="text-gray-600">+91</span>
//             <input
//               type="tel"
//               name="contactNumber"
//               placeholder="Contact Number *"
//               required
//               className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <input
//             type="text"
//             name="institutionName"
//             placeholder="Institution Name *"
//             required
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="requirements"
//             placeholder="Requirements"
//             rows={4}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//           <button
//             type="submit"
//             className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }










// import React, { useState } from "react";
// import axios from "axios";

// export default function DemoForm({ open, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     institutionName: "",
//     requirements: "",
//   });

//   const [status, setStatus] = useState(null);

//   if (!open) return null;

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();  // Prevent page reload
//   console.log('📤 handleSubmit triggered');
//   console.log('Form data:', formData);  // This is safe

//   try {
//     const response = await fetch('http://localhost:5000/api/demo', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),  // formData is safe to stringify
//     });

//     const result = await response.json();
//     console.log('✅ Response:', result);

//     if (result.success) {
//       alert('Demo request submitted successfully!');
//       setFormData({
//         name: "",
//         email: "",
//         contactNumber: "",
//         institutionName: "",
//         requirements: "",
//       });
//     } else {
//       alert('Submission failed: ' + result.message);
//     }
//   } catch (error) {
//     console.error('❌ Error submitting form:', error.message);
//     alert('Submission failed due to server error.');
//   }
// };


//   return (
//     <>
//       <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-40 z-40" />

//       <div className="fixed top-0 right-0 h-full w-96 bg-white z-50 shadow-lg p-6 flex flex-col">
//         <button
//           onClick={onClose}
//           className="self-end text-gray-600 hover:text-gray-900 mb-4 text-2xl font-bold"
//           aria-label="Close form"
//         >
//           ×
//         </button>

//         <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
//         <p className="text-gray-600 mb-6 text-sm">
//           Have questions about our Products? Fill out the form below to get a call with us.
//         </p>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name *"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email *"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="flex items-center gap-2">
//             <span className="text-gray-600">+91</span>
//             <input
//               type="tel"
//               name="contactNumber"
//               placeholder="Contact Number *"
//               required
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <input
//             type="text"
//             name="institutionName"
//             placeholder="Institution Name *"
//             required
//             value={formData.institutionName}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="requirements"
//             placeholder="Requirements"
//             rows={4}
//             value={formData.requirements}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {status && (
//             <div
//               className={`text-sm ${
//                 status.success ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {status.message}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }










// // const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setStatus(null);

// //     try {
// //       const res = await axios.post("http://localhost:5000/api/demo", formData);
// //       setStatus({ success: true, message: "Submitted successfully!" });
// //       setFormData({
// //         name: "",
// //         email: "",
// //         contactNumber: "",
// //         institutionName: "",
// //         requirements: "",
// //       });
// //     } catch (err) {
// //       setStatus({
// //         success: false,
// //         message: err.response?.data?.message || "Submission failed",
// //       });
// //     }
// //   };











// import React, { useState } from "react";

// export default function DemoForm({ open, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     institutionName: "",
//     requirements: "",
//   });

//   const [status, setStatus] = useState(null);

//   if (!open) return null;

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("📤 handleSubmit triggered");
//     console.log("Form data:", formData);

//     try {
//       const response = await fetch("http://localhost:5000/api/demo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("✅ Response:", result);

//       if (response.ok && result.success) {
//         alert("Demo request submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           contactNumber: "",
//           institutionName: "",
//           requirements: "",
//         });
//         setStatus({ success: true, message: result.message });
//       } else {
//         alert("Submission failed: " + result.message);
//         setStatus({ success: false, message: result.message });
//       }
//     } catch (error) {
//       console.error("❌ Error submitting form:", error.message);
//       alert("Submission failed due to server error.");
//       setStatus({ success: false, message: "Server error occurred." });
//     }
//   };

//   return (
//     <>
//       <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-40 z-40" />

//       <div className="fixed top-0 right-0 h-full w-96 bg-transparent backdrop-blur-md z-50 shadow-lg p-6 flex flex-col text-white">
//         <button
//           onClick={onClose}
//           className="self-end text-gray-600 hover:text-gray-900 mb-4 text-2xl font-bold"
//           aria-label="Close form"
//         >
//           ×
//         </button>

//         <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
//         <p className="text-gray-600 mb-6 text-sm">
//           Have questions about our Products? Fill out the form below to get a call with us.
//         </p>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name *"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email *"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <div className="flex items-center gap-2">
//             <span className="text-gray-600">+91</span>
//             <input
//               type="tel"
//               name="contactNumber"
//               placeholder="Contact Number *"
//               required
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <input
//             type="text"
//             name="institutionName"
//             placeholder="Institution Name *"
//             required
//             value={formData.institutionName}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="requirements"
//             placeholder="Requirements"
//             rows={4}
//             value={formData.requirements}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {status && (
//             <div
//               className={`text-sm ${
//                 status.success ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {status.message}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }













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
      {/* Overlay behind the form */}
      <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-40 z-40" />

      {/* Sliding Form Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-lg p-6 flex flex-col text-gray-800 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="self-end text-gray-500 hover:text-black mb-4 text-2xl font-bold"
          aria-label="Close form"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-2">Get In Touch</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Have questions about our Products? Fill out the form below to get a call with us.
        </p>

        {/* Form */}
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

          {/* Status Message */}
          {status && (
            <div
              className={`text-sm ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit Button */}
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