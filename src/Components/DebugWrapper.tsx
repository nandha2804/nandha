
import React, { useEffect, useState } from 'react';

interface DebugWrapperProps {
  name: string;
  children: React.ReactNode;
}

const DebugWrapper: React.FC<DebugWrapperProps> = ({ name, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(`[${name}] Component mounted`);
    setMounted(true);
    return () => {
      console.log(`[${name}] Component unmounted`);
    };
  }, [name]);

  if (!mounted) {
    return null;
  }

  const style = {
    position: 'relative' as const,
    outline: '1px dashed rgba(77, 186, 135, 0.3)',
    padding: '1px',
  };

  const labelStyle = {
    position: 'absolute' as const,
    top: '-8px',
    left: '8px',
    background: '#0f1115',
    padding: '0 4px',
    fontSize: '10px',
    color: '#4dba87',
    zIndex: 1000,
  };

  return (
    <div style={style}>
      <span style={labelStyle}>{name}</span>
      {children}
    </div>
  );
};

export default DebugWrapper;