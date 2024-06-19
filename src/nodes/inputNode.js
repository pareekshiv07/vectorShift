// InputNode.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const InputNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'value' },
  ];

  return (
    <AbstractNode id={id} data={data} type="Input" handles={handles}>
      {(currName, nodeType, handleNameChange, handleTypeChange) => (
        <>
          <label>
            Name:
            <input type="text" value={currName} onChange={handleNameChange} />
          </label>
          <label>
            Type:
            <select value={nodeType} onChange={handleTypeChange}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </>
      )}
    </AbstractNode>
  );
};
