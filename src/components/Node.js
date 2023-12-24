import React from 'react';

const Node = ({ id, label, x, y }) => {
  return (
    <div style={{ position: 'absolute', left: x, top: y, borderRadius: '50%', width: '40px', height: '40px', backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {label}
    </div>
  );
};

export default Node;
