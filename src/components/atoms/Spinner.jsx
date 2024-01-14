import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <div className="border-natural-300 h-14 w-14 animate-spin rounded-full border-8 border-t-black" />
    </div>
  );
};

export default Spinner;
