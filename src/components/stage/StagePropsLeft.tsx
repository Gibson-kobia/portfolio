
import React from 'react';
import StageProp from './StageProp';

const StagePropsLeft = () => {
  return (
    <div className="hidden md:flex flex-col absolute top-1/2 -translate-y-1/2 left-12 space-y-8">
      <StageProp label="Status" value="System Live" />
    </div>
  );
};

export default StagePropsLeft;
