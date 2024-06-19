// AbstractNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const AbstractNode = ({ id, data, type, children, handles }) => {
  const [currName, setCurrName] = useState(data?.name || id);
  const [nodeType, setNodeType] = useState(data?.type || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setNodeType(e.target.value);

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{type}</span>
      </div>
      <div>
        {children(currName, nodeType, handleNameChange, handleTypeChange)}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
