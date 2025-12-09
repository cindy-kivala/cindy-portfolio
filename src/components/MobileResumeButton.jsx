// // components/MobileResumeButton.jsx
// import React, { useState } from 'react';
// import { Download, FileText, X } from 'lucide-react';

// const MobileResumeButton = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/Kivala Cindy CV.pdf'; 
//     link.download = 'CindyKivala_Resume.pdf';
//     link.target = '_blank';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="lg:hidden fixed bottom-24 right-4 z-50">
//       {/* Resume Button */}
//       <button
//         onClick={handleDownload}
//         className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-accent to-blue-500 text-primary-dark font-bold rounded-full shadow-2xl shadow-primary-accent/50 hover:scale-105 transition-transform"
//       >
//         <Download size={20} />
//         <FileText size={20} />
//         <span>My CV</span>
//       </button>
      
//       {/* Dismiss button */}
//       <button
//         onClick={() => setIsVisible(false)}
//         className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
//       >
//         <X size={12} />
//       </button>
//     </div>
//   );
// };

// export default MobileResumeButton;