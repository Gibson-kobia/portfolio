
import React from 'react';

interface StagePropProps {
  label: string;
  value: string;
  className?: string;
}

const StageProp: React.FC<StagePropProps> = ({ label, value, className }) => {
  return (
    <div className={className}>
      <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.4em] mb-2">{label}</p>
      <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em]">{value}</p>
    </div>
  );
};

export default StageProp;
