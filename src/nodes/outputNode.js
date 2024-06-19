// OutputNode.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const OutputNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'value' },
  ];

  return (
    <AbstractNode id={id} data={data} type="Output" handles={handles}>
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
              <option value="Image">Image</option>
            </select>
          </label>
        </>
      )}
    </AbstractNode>
  );
};
