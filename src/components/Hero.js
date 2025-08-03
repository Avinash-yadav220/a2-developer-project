// import React from "react";

// export default function Hero() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* 🔹 Background Video */}
//       {/* <video */}
//       {/* //   className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       //   autoPlay
//       //   muted
//       //   loop
//       //   playsInline
//       // >
//       //   <source src="/background.mp4" type="video/mp4" />
//       //   Your browser does not support the video tag.
//       // </video> */}

//       {/* 🔹 Overlay */}
//       <div className="absolute inset-0 bg-[#0a162c]/70 z-10"></div>

//       {/* 🔹 Content */}
//       <div className="relative z-20 flex flex-col justify-center items-center text-white text-center h-full px-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4">
//           All Your Information in One Place
//         </h1>
//         <p className="text-lg md:text-xl font-medium">
//           Simplify Management with a Unified Data Platform.
//         </p>
//       </div>
//     </section>
//   );
// }






import React from "react";

export default function Hero() {
  return (
  <section className="relative h-screen w-full flex items-center justify-center text-center z-30">
  <div className="absolute top-[35%] w-full px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      All Your Information in One Place
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mt-4">
      Simplify Management with a Unified Data Platform
    </p>
  </div>
</section>
  );
}

