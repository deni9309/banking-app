import React from 'react';
import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 z-50 flex items-center gap-1 text-blue-700">
      <Loader2 size={40} className="animate-spin" />
      Loading...
    </div>
  );
};

export default Loader;