
import React from 'react';
import StageProp from './StageProp';

const StagePropsRight = () => {
  return (
    <div className="hidden md:flex flex-col absolute top-1/2 -translate-y-1/2 right-12 space-y-8 text-right">
      <StageProp label="Mode" value="Selected Showcase" />
    </div>
  );
};

export default StagePropsRight;
