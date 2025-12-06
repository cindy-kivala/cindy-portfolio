// components/Toast.jsx
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Toast = ({ message, type = 'success' }) => {
  return (
    <div className="fixed top-24 right-6 z-50 animate-slide-in">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
        type === 'success' 
          ? 'bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30' 
          : 'bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30'
      } backdrop-blur-xl`}>
        {type === 'success' ? (
          <CheckCircle className="text-green-400" size={20} />
        ) : (
          <XCircle className="text-red-400" size={20} />
        )}
        <span className="text-sm font-medium text-white">{message}</span>
      </div>
    </div>
  );
};

export default Toast;