import { useState } from 'react';
import { Handle } from 'reactflow';

export const AbstractNode = ({ id, data, type, children, handles }) => {
  const [currName, setCurrName] = useState(data?.name || id);
  const [nodeType, setNodeType] = useState(data?.type || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setNodeType(e.target.value);

  return (
    <div className="border border-black p-2 rounded">
      <div className="text-center font-bold">
        <span>{type}</span>
      </div>
      <div className="mt-2">
        {children(currName, nodeType, handleNameChange, handleTypeChange)}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          className="w-4 h-4 bg-blue-500"
          style={handle.style}
        />
      ))}
    </div>
  );
};
