import React from 'react';

const Edge = ({ fromNode, toNode, nodes }) => {
  const from = nodes.find((node) => node.id === fromNode);
  const to = nodes.find((node) => node.id === toNode);

  const length = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
  const angle = Math.atan2(to.y - from.y, to.x - from.x);

  return (
    <div
      style={{
        position: 'absolute',
        left: from.x,
        top: from.y,
        width: length,
        height: '2px',
        backgroundColor: 'black',
        transformOrigin: '0% 50%',
        transform: `rotate(${angle}rad)`,
      }}
    ></div>
  );
};

export default Edge;
