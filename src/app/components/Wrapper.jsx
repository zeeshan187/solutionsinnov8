
import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      {children}
    </div>
  );
};

export default Wrapper;
